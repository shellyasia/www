import fs from "node:fs";
import path from "node:path";
import { glob } from "node:fs/promises";
import { execSync } from "child_process";

const frontmatterRegex = /^\n*---(\n.+)*?\n---\n/;

const docsDir = path.resolve("docs");

const sliceExt = (file: string) => {
  return file.split(".").slice(0, -1).join(".");
};

const extractLabel = (file: string) => {
  return sliceExt(file.split("/").pop() || "");
};

function capitalizeDelimiter(str:string) {
  return str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("-");
}

function getGitInfo() {
  try {
    const commitHash = execSync("git rev-parse HEAD", { encoding: "utf-8" })
      .trim();
    const commitMessage = execSync("git log -1 --pretty=%B", {
      encoding: "utf-8",
    }).trim();
    const branch = execSync("git rev-parse --abbrev-ref HEAD", {
      encoding: "utf-8",
    }).trim();
    const author = execSync("git log -1 --pretty=%an", { encoding: "utf-8" })
      .trim();
    const commitTime = execSync("git log -1 --pretty=%ci", {
      encoding: "utf-8",
    }).trim();

    return {
      commitHash,
      commitMessage,
      branch,
      author,
      commitTime,
    };
  } catch (error) {
    console.error("Error getting git info:", error);
    return null;
  }
}

async function generateLLMDocs() {
  const outputListFile = path.resolve("public/llms.txt");

  const optionalFiles = await glob("**/*.md", { cwd: docsDir });

  const optionals: string[] = [];

  for await (const file of optionalFiles) {
    optionals.push(
      `- [${
        capitalizeDelimiter(extractLabel(file)).replace(/-/, " ")
      }](https://www.shelly.asia/docs/${sliceExt(file)})`,
    );
  }

  fs.writeFileSync(
    outputListFile,
    [
      "# Shelly Asia LLM Documentation",
      "",
      "> Shelly - Smart Home for Everyone",
      "",
      "## Docs",
      "",
      "- [Full Docs](https://www.shelly.asia/llms-full.txt) Full documentation of Shelly. (without examples)",
      "- [Tiny Docs](https://www.shelly.asia/llms-small.txt): Tiny documentation of Shelly. (includes only desciption of core)",
      "",
      "## Optional",
      "",
      ...optionals,
    ].join("\n"),
    "utf-8",
  );
  console.log(`< Output '${outputListFile}' `);

  const outputFullFile = path.resolve("public/llms-full.txt");
  const files = await glob("**/*.md", { cwd: docsDir });

  const fullContent = await generateContent(
    files,
    docsDir,
    "<SYSTEM>This is the full developer documentation for Shelly IoT.</SYSTEM>\n\n",
  );

  fs.writeFileSync(outputFullFile, fullContent, "utf-8");
  console.log(`< Output '${outputFullFile}' `);

  const outputTinyFile = path.resolve("public/llms-small.txt");

  const tinyExclude = ["concepts", "helpers", "middleware"];
  const tinyFiles = await glob("**/*.md", {
    cwd: docsDir,
    exclude: (filename: string) => tinyExclude.includes(filename),
  });

  const tinyContent = await generateContent(
    tinyFiles,
    docsDir,
    "<SYSTEM>This is the tiny developer documentation for Shelly IoT.</SYSTEM>\n\n",
  );

  fs.writeFileSync(outputTinyFile, tinyContent, "utf-8");
  console.log(`< Output '${outputTinyFile}' `);

  // Generate version.txt
  const gitInfo = getGitInfo();
  if (gitInfo) {
    const versionContent = [
      `<a href="https://github.com/shellyasia/www/commit/${gitInfo.commitHash}">Commit Hash: "${gitInfo.commitHash}"</a>`,

      `Branch: "${gitInfo.branch}"`,
      `Author: "${gitInfo.author}"`,
      `Commit Time: "${gitInfo.commitTime}"`,
      `Build Date: "${new Date().toISOString()}"`,
    ].join("<br>\n");

    const versionFile = path.resolve("public/version");
    fs.writeFileSync(versionFile, versionContent, "utf-8");
    console.log(`< Output '${versionFile}' `);
  }
}

async function generateContent(
  files: NodeJS.AsyncIterator<string>,
  docsDir: string,
  header: string,
): Promise<string> {
  let content = header + "# Start of ShellyIoT documentation\n";

  for await (const file of files) {
    console.log(`> Writing '${file}' `);
    const fileContent = fs.readFileSync(
      path.resolve(docsDir, file),
      "utf-8",
    );
    content += fileContent.replace(frontmatterRegex, "") + "\n\n";
  }

  return content;
}

generateLLMDocs().catch(console.error);
