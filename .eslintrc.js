/* eslint-disable */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', "plugin:react/recommended"],
  parser: '@typescript-eslint/parser',
  parserOptions: { tsconfigRootDir: __dirname, project: ["./tsconfig.json"], sourceType: "module", ecmaVersion: 2022 },
  plugins: ['@typescript-eslint'],
  root: true,
};
