export default {
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  printWidth: 120,
  tabWidth: 2,
  overrides: [
    {
      files: ['tsconfig.json'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};
