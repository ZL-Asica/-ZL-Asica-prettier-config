# @zl-asica/prettier-config

[![npm 版本][npm-version-badge]][npm-versions-link]  
[![许可证][license-badge]][license-link]  
[![代码格式: prettier][prettier-badge]][prettier-link]  
[![赞助][sponsor-badge]][sponsor-link]  

> [English Version](README.md) | [中文版本](README_CN.md)

一个由 **ZL Asica** 提供的可共享和可复用的 Prettier 配置，旨在确保 JavaScript、TypeScript 和 React 项目中一致的代码格式化。

## 安装

在项目中将此包作为开发依赖项安装：

```bash
npm install --save-dev prettier @zl-asica/prettier-config
# 或使用 Yarn
yarn add -D prettier @zl-asica/prettier-config
# 或使用 pnpm
pnpm add -D prettier @zl-asica/prettier-config
```

## 使用方法

要使用此 Prettier 配置，请在项目根目录下创建一个 `.prettierrc` 文件，并加入以下内容：

```json
"@zl-asica/prettier-config"
```

如果更喜欢使用 `.prettierrc.js` 或 `prettier.config.js`：

```javascript
module.exports = require("@zl-asica/prettier-config")
```

现在，所有 Prettier 命令都会遵循 `@zl-asica/prettier-config` 提供的配置。

## 配置详情

此配置包含以下 Prettier 选项：

- **Trailing commas**：仅在 ES5 合法的地方添加尾随逗号（例如对象和数组）。
- **Tab width**：每个缩进使用 2 个空格（JSON 文件使用 4 个空格）。
- **Semicolons**：在语句末尾使用分号。
- **Quotes**：字符串和 JSX 使用单引号。
- **Bracket spacing**：对象字面量中的大括号内添加空格 (`{ foo: bar }`)。
- **Arrow function parameters**：始终为箭头函数参数添加括号，即使是单个参数。
- **Print width**：行宽限制为 80 个字符。
- **End of line**：跨平台一致的换行符为 LF。
- **Single attribute per line**：在 JSX 中将每个属性放在新行上。
- **Embedded language formatting**：自动格式化嵌入代码（如 markdown 中的 HTML）。
- **Vue 支持**：在 Vue 文件中缩进 `<script>` 和 `<style>` 标签。

## 推荐的 .prettierignore

为了避免格式化不必要的文件，你可以使用以下 `.prettierignore` 模板。可以直接下载此文件或将内容复制并粘贴到新 `.prettierignore` 文件中。

<details>
<summary>点击查看 .prettierignore 内容</summary>

```plaintext
# 忽略 node_modules、构建输出和日志
node_modules/
dist/
build/
*.log
.DS_Store

# 忽略文档和大型数据文件
docs/
data/

# 忽略其他不需要格式化的文件
*.min.js
*.lock
```

</details>

**下载**:  
[右键点击此处选择“另存为...”以下载 `.prettierignore`][prettierignore-download-link]

## 为什么要使用此配置？

此配置可以确保：

- 在多个项目中保持一致的代码格式。
- 易于集成到任何 JavaScript、TypeScript 或 React 项目。
- 清晰且简洁的格式化偏好，有助于提升代码可读性。

## 贡献

如果你有改进建议，欢迎在 [GitHub][github-link] 上提出拉取请求或问题。

## 许可证

此项目使用 [MIT 许可证][license-link]。

<!-- Badges -->

[npm-version-badge]: https://img.shields.io/npm/v/@zl-asica/prettier-config?style=flat-square
[license-badge]: https://img.shields.io/github/license/ZL-Asica/prettier-config?style=flat-square
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[sponsor-badge]: https://img.shields.io/badge/sponsor-%E2%9D%A4-red?style=flat-square

<!-- Links -->

[npm-versions-link]: https://www.npmjs.com/package/@zl-asica/prettier-config
[prettier-link]: https://github.com/prettier/prettier
[sponsor-link]: https://github.com/sponsors/ZL-Asica
[prettierignore-download-link]: https://raw.githubusercontent.com/ZL-Asica/prettier-config/main/.prettierignore
[github-link]: https://github.com/ZL-Asica/prettier-config
[license-link]: https://github.com/ZL-Asica/prettier-config/blob/main/LICENSE