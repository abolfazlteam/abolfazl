module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "eslint-config-prettier",
    "plugin:storybook/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  // rules: {
  //   "react-refresh/only-export-components": [
  //     "warn",
  //     { allowConstantExport: true },
  //   ],
  // },

  settings: {
    "import/resolver": {
      node: {
        path: ["src"],
        extenstions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
