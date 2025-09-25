


import * as cheerio from 'cheerio';
import OpenAI from "openai";

import TurndownService from 'turndown';
import fs from "node:fs";
import path from "node:path";



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

interface Doc {
    title: string
    link: string
    contentMarkdown: string
    contentMarkdownZh: string
}

async function fetchDoc(docURL: string): Promise<Doc | undefined> {
    if (!docURL) return;
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const parts = docURL.split('/')
    //get last 2 parts and trim the last -
    const label = parts.slice(-2).join('-').replace(/-$/, '').toLowerCase();
    console.log(`Fetching document: ${docURL} as ${label}`);
    if (!label) return;
    //fetch html


    const htmlString = await fetch(docURL).then(res => res.text())
    const $ = cheerio.load(htmlString)
    const title = $('div.markdown > h1').first().text() || ''
    const contentHTML = $('div.markdown').first().html() || ''
    const turndownService = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced'
    })
    let contentMarkdown = turndownService.turndown(contentHTML).replaceAll('../__attachments/', 'https://kb.shelly.cloud/__attachments/') //remove extra new lines
    contentMarkdown = contentMarkdown.replaceAll('./../__theme/', 'https://kb.shelly.cloud/__theme/');

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
        link: label,
        contentMarkdown,
        contentMarkdownZh: zh,
    }
    return doc
}



const urls = [
    'https://shelly-api-docs.shelly.cloud/integrator-api/',
    'https://shelly-api-docs.shelly.cloud/integrator-api/users',
    'https://shelly-api-docs.shelly.cloud/integrator-api/communication',
    'https://shelly-api-docs.shelly.cloud/integrator-api/demo-code',
    '',
    'https://shelly-api-docs.shelly.cloud/cloud-control-api/',
    'https://shelly-api-docs.shelly.cloud/cloud-control-api/communication-v2',
    'https://shelly-api-docs.shelly.cloud/cloud-control-api/real-time-events',
    '',
]
async function main() {



    await Promise.all(urls.map(async (url) => {
        const doc = await fetchDoc(url);
        if (!doc) return;

        // Save to file mkdir by nodejs
        fs.writeFileSync(path.join("./docs", doc.link + '.md'), doc.contentMarkdownZh);
        fs.writeFileSync(path.join("./en/docs", doc.link + '.md'), doc.contentMarkdown);
        console.log(`Saved document: ${url}`);
    }));
}

main().then(() => {
    console.log("Done");
}).catch((err) => {
    console.error(err);
    process.exit(1);
})