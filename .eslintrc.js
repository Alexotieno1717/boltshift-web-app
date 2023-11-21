// module.exports = {
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint'],
//   extends: ['next', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
//   rules: {
//     // Your ESLint rules here
//   },
// };

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
