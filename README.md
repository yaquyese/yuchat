YuChat — 文本清洗与轻量级在线聊天

YuChat — Text Cleaner & Lightweight Online Chat

一个集文本清洗、在线聊天与文件处理于一体的轻量级 Web 项目。

A lightweight web application combining text cleaning, online chat, and file handling.

<p align="center">
  <a href="https://taoge6.top/">在线体验 · Live Demo</a>
  ·
  <a href="https://github.com/yaquyese/yuchat">GitHub Repository</a>
</p>---

📖 项目简介 · Introduction

YuChat 是一个以实际需求为导向的个人 Web 项目，致力于通过简洁、易用的工具提升日常文本处理与信息交流效率。

YuChat is a personal web project focused on practical needs, designed to make everyday text processing and communication simpler and more efficient.

项目以文本清洗工具为核心，帮助用户从杂乱文本中快速提取有用信息，同时提供轻量级在线聊天和文件处理功能。项目基于 Cloudflare 的 Serverless 服务构建，尽量降低部署与维护成本。

The project centers on text cleaning, helping users extract useful information from unstructured text. It also provides lightweight online chat and file handling, using Cloudflare's serverless platform to simplify deployment and maintenance.

✨ 主要功能 · Features

1. 文本清洗工具 · Text Cleaner

将杂乱文本整理为清晰、易读的结果，帮助用户快速提取所需内容。

Transform messy text into clean, readable results and quickly extract useful information.

- 链接识别 · URL Detection — 识别文本中的网址和链接。
- 邮箱识别 · Email Detection — 提取电子邮箱地址。
- 账号标识识别 · Account Identifier Detection — 识别账号、用户名等标识。
- 密码识别 · Password Detection — 识别符合工具规则的密码字段。
- 卡密识别 · Activation Code Detection — 识别卡密、兑换码等字符串。
- 数字串识别 · Number Sequence Detection — 提取符合规则的数字串。

适用于聊天记录、分享文案、混合字段及其他日常文本整理场景。

Useful for processing chat logs, shared messages, mixed-format fields, and other everyday text.

2. 轻量级在线聊天 · Lightweight Online Chat

提供简洁的在线聊天界面，支持消息记录的保存与读取，并提供文件上传相关功能。

A simple online chat interface with message history storage and retrieval, along with file upload functionality.

3. 云端数据与文件存储 · Cloud Storage

- Cloudflare D1 — 用于结构化数据存储。

- Cloudflare R2 — 用于文件对象存储。

- Cloudflare Pages Functions — 为前端提供后端 API。

- Cloudflare D1 — Stores structured application data.

- Cloudflare R2 — Stores file objects.

- Cloudflare Pages Functions — Provides backend APIs for the frontend.

4. 在线访问与部署 · Deployment

- 基于 Cloudflare Pages 部署。

- 支持自定义域名。

- 支持 HTTPS 安全访问。

- 使用 GitHub 进行源代码管理与版本更新。

- Deployed on Cloudflare Pages.

- Supports custom domains.

- Supports secure HTTPS access.

- Uses GitHub for source control and version management.

🛠️ 技术栈 · Tech Stack

技术 Technology| 用途 Purpose
HTML / CSS / JavaScript| 前端页面与交互 · Frontend UI and interactions
Cloudflare Pages| 静态网站托管 · Static site hosting
Cloudflare Pages Functions| 后端 API · Backend APIs
Cloudflare D1| 结构化数据存储 · Structured data storage
Cloudflare R2| 文件对象存储 · Object storage
GitHub| 代码托管与版本管理 · Source control

🏗️ 部署架构 · Architecture

User Browser / 用户浏览器
          |
          v
    Cloudflare Pages
          |
    +-----+----------------+
    |                      |
    v                      v
Text Cleaner           Online Chat
文本清洗工具             在线聊天
                           |
                           v
                 Cloudflare Pages Functions
                           |
                    +------+------+
                    |             |
                    v             v
               Cloudflare D1  Cloudflare R2
                 数据存储       文件存储

🎯 项目方向 · Project Goals

YuChat is an evolving personal project focused on practical web tools, lightweight applications, cloud storage, and serverless deployment.

YuChat 是一个持续完善的个人项目，致力于探索实用型 Web 工具、轻量级应用、云端存储与 Serverless 部署实践。

欢迎体验、提出建议或交流相关技术实践。

Feedback, suggestions, and technical discussions are welcome.

🔐 使用提醒 · Usage Note

文本清洗工具可能会处理账号、密码、卡密等敏感内容。请在使用前确认文本来源和处理环境可信，避免将真实凭据粘贴到不可信的网站或公开分享。

The text cleaner may process sensitive information such as account identifiers, passwords, and activation codes. Ensure the processing environment is trusted, and avoid pasting real credentials into untrusted websites or sharing them publicly.

📄 许可证 · License

项目许可证尚待确定。使用、修改或再分发本项目之前，请先确认仓库中适用的许可证与相关依赖的许可要求。

The project license has not yet been specified. Please verify the applicable project and dependency licenses before using, modifying, or redistributing the code.
