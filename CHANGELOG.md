# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.7] - 2024-11-08

### Removed

- **JSON Formatting Override**: Default back to 2 spaces.

## [1.0.6] - 2024-11-07

### Changed

- **Semicolons**: Default set to true for better compatibility.

## [1.0.5] - 2024-11-07

### Removed

- **Sort imports**: Removed `@trivago/prettier-plugin-sort-imports` for import sorting.

## [1.0.4] - 2024-11-07

### Added

- **Sort imports**: Implement `@trivago/prettier-plugin-sort-imports` for import sorting.

### Changed

- **Readme**: Remember user to install `prettier` and other peerDependencies at the same time they install this package.

## [1.0.3] - 2024-11-07

### Changed

- **Implement GitHub Actions Workflow**: Enhanced the publishing workflow to include `npm pkg fix` for automatically fixing `package.json` formatting issues before publishing.

## [1.0.0] - 2024-11-07

### Added

- Initial release of `@zl-asica/prettier-config`.
- Standard Prettier configuration for consistent code style across JavaScript, TypeScript, and React projects.
- **Trailing commas**: Enabled for ES5-compliant structures.
- **Tab width**: Set to 2 spaces (4 spaces for JSON files).
- **Semicolons**: Omitted at the end of statements.
- **Single quotes**: Applied to both strings and JSX.
- **Bracket spacing**: Enabled for object literals.
- **Arrow function parameters**: Always include parentheses, even with a single parameter.
- **Print width**: Set to 80 characters for line wrapping.
- **End of line**: Standardized to LF for cross-platform consistency.
- **Single attribute per line**: Each attribute is placed on a new line in JSX.
- **Embedded language formatting**: Auto-formatting for embedded code (e.g., HTML in markdown).
- **Vue support**: Indentation for `<script>` and `<style>` tags in Vue files.

### JSON Formatting Override

- Applied a specific override for JSON files, setting `tabWidth` to 4 spaces for improved readability.

### Documentation

- Added comprehensive `README.md` with installation, usage, and configuration details.
- Provided `.prettierignore` template for users to prevent unnecessary files from being formatted.
