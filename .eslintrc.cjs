module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', "plugin:react/recommended"],
  parser: '@typescript-eslint/parser',
  parserOptions: { tsconfigRootDir: __dirname, project: ["./tsconfig.json"], sourceType: "module", ecmaVersion: 2022 },
  plugins: ['@typescript-eslint'],
  env: { browser: true, node: true, es2022: true },
  root: true
};
