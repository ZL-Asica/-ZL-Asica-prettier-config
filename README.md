# @zl-asica/prettier-config

![npm version][npm-version-badge]
![License][license-badge]
![Downloads][downloads-badge]
[![code style: prettier][prettier-badge]][prettier-link]
[![Sponsor][sponsor-badge]][sponsor-link]

A shareable and reusable Prettier configuration by **ZL Asica**, designed to ensure consistent code formatting across JavaScript, TypeScript, and React projects.

## Installation

Install this package as a development dependency in your project:

```bash
npm install --save-dev @zl-asica/prettier-config
# or with Yarn
yarn add -D @zl-asica/prettier-config
# or with pnpm
pnpm add -D @zl-asica/prettier-config
```

## Usage

To use this Prettier configuration, create a `.prettierrc` file in the root directory of your project with the following content:

```json
"@zl-asica/prettier-config"
```

Alternatively, if you prefer `.prettierrc.js`:

```javascript
module.exports = require("@zl-asica/prettier-config")
```

Now, all Prettier commands will follow the configuration provided by `@zl-asica/prettier-config`.

### JSON Formatting Override

This configuration includes a specific override for JSON files, setting `tabWidth` to 4 spaces, ensuring clearer structure in JSON documents. All other files use 2 spaces per indentation level.

## Configuration Details

This configuration includes the following Prettier options:

- **Trailing commas**: Only where valid in ES5 (e.g., objects, arrays).
- **Tab width**: 2 spaces per tab (except JSON, which uses 4 spaces).
- **Semicolons**: No semicolons at the end of statements.
- **Quotes**: Single quotes for strings and JSX.
- **Bracket spacing**: Spaces inside object literals (`{ foo: bar }`).
- **Arrow function parameters**: Always include parentheses, even with a single parameter.
- **Print width**: Wrap lines at 80 characters.
- **End of line**: LF for consistent cross-platform line endings.
- **Single attribute per line**: Puts each attribute on a new line in JSX.
- **Embedded language formatting**: Automatically formats embedded code (e.g., HTML in markdown).
- **Vue support**: Indents `<script>` and `<style>` tags in Vue files.

## Recommended .prettierignore

To prevent formatting of unnecessary files, you can use the following `.prettierignore` template. You can download this file directly or copy and paste the contents into a new `.prettierignore` file in your project.

<details>
<summary>Click to view .prettierignore content</summary>

```plaintext
# Ignore node_modules, build output, and logs
node_modules/
dist/
build/
*.log
.DS_Store

# Ignore documentation and large data files
docs/
data/

# Ignore other files not needing formatting
*.min.js
*.lock
```

</details>

**Download:**  
[Right-click here and select "Save Link As..." to download `.prettierignore`][prettierignore-download-link]

## Why Use This Configuration?

This configuration ensures:

- Consistent code formatting across multiple projects.
- Easy integration with any JavaScript, TypeScript, or React project.
- Clear and minimal formatting preferences that enhance readability.

## Contributing

If you’d like to suggest improvements, please feel free to open a pull request or issue on [GitHub][github-link].

## License

This project is licensed under the [MIT License][license-link].

<!-- Badges -->

[npm-version-badge]: https://img.shields.io/npm/v/@zl-asica/prettier-config?style=flat-square
[license-badge]: https://img.shields.io/github/license/ZL-Asica/prettier-config?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@zl-asica/prettier-config?style=flat-square
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[sponsor-badge]: https://img.shields.io/badge/sponsor-%E2%9D%A4-red?style=flat-square

<!-- Links -->>

[prettier-link]: https://github.com/prettier/prettier
[sponsor-link]: https://github.com/sponsors/ZL-Asica
[prettierignore-download-link]: https://raw.githubusercontent.com/ZL-Asica/prettier-config/main/.prettierignore
[github-link]: https://github.com/ZL-Asica/prettier-config
[license-link]: https://github.com/ZL-Asica/prettier-config/blob/main/LICENSE
