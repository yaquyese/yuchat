YuChat — 文本清洗与轻量级在线聊天

一个集文本清洗、在线聊天与文件处理于一体的轻量级 Web 项目，基于 Cloudflare Pages 构建，探索实用工具开发与 Serverless 云端部署。

在线体验： "taoge6.top" (https://taoge6.top/)

项目仓库： "GitHub — yaquyese/yuchat" (https://github.com/yaquyese/yuchat)

✨ 项目简介

YuChat 是一个持续完善中的个人 Web 项目，优先解决日常使用中的实际需求。

项目首先提供文本清洗功能，帮助用户快速处理文本内容；同时保留轻量级在线聊天与文件处理功能，并通过云端服务实现数据和文件存储。

项目采用简洁的技术架构，尽量减少部署与维护成本，让常用功能能够通过浏览器直接使用。

🚀 主要功能

1. 文本清洗工具

提供便捷的文本清洗能力，帮助用户更高效地整理和处理文本内容，适用于日常文本编辑与数据预处理等场景。

2. 轻量级在线聊天

提供简洁的在线聊天界面，支持消息记录的保存与读取，并结合文件上传功能实现相关内容的管理。

3. 云端数据与文件存储

- 使用 Cloudflare D1 保存结构化数据。
- 使用 Cloudflare R2 存储文件。
- 通过 Cloudflare Pages Functions 提供后端 API。

4. 在线访问与部署

- 基于 Cloudflare Pages 部署。
- 支持绑定自定义域名。
- 通过 HTTPS 安全访问网站。
- 使用 GitHub 管理源代码与版本更新。

🛠️ 技术栈

技术| 用途
HTML / CSS / JavaScript| 前端页面与交互
Cloudflare Pages| 静态网站托管
Cloudflare Pages Functions| 后端 API
Cloudflare D1| 结构化数据存储
Cloudflare R2| 文件对象存储
GitHub| 代码托管与版本管理

🏗️ 部署架构

用户浏览器
    │
    ▼
Cloudflare Pages
    ├── 文本清洗工具
    ├── 在线聊天界面
    └── Pages Functions
           ├── D1 数据库
           └── R2 文件存储

🎯 项目方向

这是一个以实际需求为导向的个人开发项目，持续探索轻量级 Web 工具、在线应用、云端存储与 Serverless 部署。

欢迎体验、提出建议，并交流相关技术实践。

📄 许可证

项目许可证尚待确定。使用、修改或再分发本项目之前，请先确认仓库中适用的许可证与相关依赖的许可要求。
