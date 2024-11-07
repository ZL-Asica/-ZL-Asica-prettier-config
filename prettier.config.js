// @ts-check

/**
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80, // Wrap lines at 80 characters
  tabWidth: 2, // Set the number of spaces per indentation level
  useTabs: false, // Use spaces instead of tabs for indentation
  semi: false, // Omit semicolons at the ends of statements
  singleQuote: true, // Use single quotes instead of double quotes
  jsxSingleQuote: true, // Use single quotes in JSX
  quoteProps: 'as-needed', // Only add quotes around object keys when required
  trailingComma: 'es5', // Add trailing commas where valid in ES5 (objects, arrays, etc.)
  bracketSameLine: false, // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line
  bracketSpacing: true, // Add spaces inside braces in object literals
  arrowParens: 'always', // Always include parentheses around arrow function parameters
  endOfLine: 'lf', // Use LF for line breaks (for cross-platform compatibility)
  singleAttributePerLine: true, // Put every JSX attribute in a new line
  embeddedLanguageFormatting: 'auto', // Automatically format embedded code (like HTML in markdown)
  htmlWhitespaceSensitivity: 'css', // Handle whitespace in HTML based on CSS display property
  proseWrap: 'preserve', // Do not automatically wrap markdown text (useful for documentation)
  vueIndentScriptAndStyle: true, // Indent script and style tags in Vue files

  // Override settings specifically for JSON files
  overrides: [
    {
      files: '*.json',
      options: {
        tabWidth: 4, // Use 4 spaces for indentation in JSON files
      },
    },
  ],
}

module.exports = config
