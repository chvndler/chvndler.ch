module.exports = {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  jsxSingleQuote: true,
  useTabs: false,
  tabWidth: 2,
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'preserve',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  trailingComma: 'all',
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
  parsers: 'babel',
  tailwindConfig: "./tailwind.config.js",
  plugins: ['prettier-plugin-tailwindcss'],
  pluginSearchDirs: [
 		"."
 	],
};
