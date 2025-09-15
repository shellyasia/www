


import * as cheerio from 'cheerio';
import OpenAI from "openai";

import TurndownService from 'turndown';
import fs from "node:fs";
import path from "node:path";

interface Doc {
    title: string
    contentHTML: string
    contentMarkdown: string
    contentMarkdownZh: string
    coverage: string
}



async function ai(sys: string, user: string): Promise<string> {
    const apiKey = process.env.ALI_API_KEY;
    if (!apiKey) {
        throw new Error("Please set ALI_API_KEY in your environment variables.");
    }
    const openai = new OpenAI(
    {
        apiKey: apiKey,
        baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    })
    const completion = await openai.chat.completions.create({
        // 模型列表：https://help.aliyun.com/zh/model-studio/getting-started/models
        model: "qwen-flash",  // qwen-plus 属于 qwen3 模型，如需开启思考模式，请参见：https://help.aliyun.com/zh/model-studio/deep-thinking
        messages: [
            { role: "system", content: sys },
            { role: "user", content: user }
        ],
    });
    return completion.choices[0].message.content || '';
}


async function fetchDoc(name: string): Promise<Doc> {
    const docURL = `https://kb.shelly.cloud/knowledge-base/${encodeURIComponent(name)}`
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const htmlString = await fetch(docURL).then(res => res.text())
    const $ = cheerio.load(htmlString)
    const coverageURL = $('figure > img').first().attr('src') || ''
    const title = $('h1.article__heading').first().text() || ''
    const contentHTML = $('section.article__content').first().html() || ''
    const turndownService = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced'
    })
    let contentMarkdown = turndownService.turndown(contentHTML).replaceAll('../__attachments/', 'https://kb.shelly.cloud/__attachments/') //remove extra new lines
    //ai to fix markdown format and remove empty content or headline without content
    contentMarkdown = await ai(
        "你是一个专业的技术文档编辑助手。你的任务是对用户提供的英文技术文档内容进行润色和修改。请确保：\n- 修复任何语法错误或markdown语法错误，使输出为有效的markdown格式。\n- 删除任何空内容或没有内容的标题。\n- 不要添加或删除内容，只进行润色和格式修复。",
        `请对以下英文技术文档内容进行润色和修改，以确保其格式正确且易于阅读,直接输出结果不要输出无关内容：

        ${contentMarkdown}`
    )
    //translate to chinese
    const zh = await ai(
        "你是一个专业的技术文档翻译助手。你的任务是将用户提供的英文技术文档内容翻译成中文。请确保：\n- 翻译准确，专业术语使用恰当的中英文对照。\n- 保持原文的格式和结构，包括标题、列表、代码块、链接等。\n- 修复任何语法错误或markdown语法错误，使输出为有效的markdown格式。\n- 不要添加或删除内容，只进行翻译和格式修复。",
        `请将以下英文技术文档内容翻译成中文，并保持原文的格式和结构，修复markdown语法错误，或重新排版以确保可读性,直接输出结果不要输出无关内容：

${contentMarkdown}`
    )

    const doc: Doc = {
        title,
        contentHTML,
        contentMarkdown, //remove extra new lines
        coverage: coverageURL.replace('../__attachments/', 'https://kb.shelly.cloud/__attachments/'),
        contentMarkdownZh: zh
    }
    return doc
}


const names = [
    'add-new-device',
    'add-via-bluetooth',
    'add-via-wi-fi-ap-scan',
    'add-via-scan-network',

    'shelly-plug-s', 
    'shelly-2l-gen3', 
    'shelly-1pm-gen3', 
    'shelly-2pm-gen3',
    'shelly-h-t-gen3',
    'shelly-dimmer-gen3',

    'shelly-1-gen3',
    'shelly-1-gen4',
    'shelly-1-mini-gen4',
    'shelly-2pm-gen4',
    'shelly-pro-3em',

];//add more


async function main() {



    await Promise.all(names.map(async (name) => {
        const doc = await fetchDoc(name);
        // Save to file mkdir by nodejs
        fs.writeFileSync(path.join("./docs", name + '.md'), "# "+doc.title + '\n\n' + doc.contentMarkdownZh);
        fs.writeFileSync(path.join("./en/docs", name + '.md'), "# "+doc.title + '\n\n' + doc.contentMarkdown);
    }));
}

main().then(() => {
    console.log("Done");
}).catch((err) => {
    console.error(err);
    process.exit(1);
})