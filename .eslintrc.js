const { resolve } = require("path")
module.exports = exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    parser: "babel-eslint",
  },
  rules: {
    allowArgumentsExplicitlyTypedAsAny: "off",
    allowDirectConstAssertionInArrowFunctions: "off",
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    indent: ["warn", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    "no-async-promise-executor": "error",
    "no-misleading-character-class": "warn",
    "no-prototype-builtins": "off",
    "no-shadow-restricted-names": "off",
    "no-case-declarations": "off",
    "no-console": "off",
    "no-unused-vars": "off",
    "no-useless-catch": "off",
    "no-with": "off",
    quotes: ["off", "double"],
    "require-atomic-updates": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    semi: ["error", "never"],
    "@typescript-eslint/no-unused-vars": ["off"],
    "@typescript-eslint/no-empty-interface": [
      "off",
      { allowSingleExtends: true },
    ],
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "eslint-plugin-import",
    "import",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:tailwind/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      // this loads <rootdir>/tsconfig.json to eslint
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: "tsconfig.json",
      },
      // If webpack pass, eslint should pass
      webpack: {
        config: resolve(__dirname, "configs/webpack/common.js"),
      },
      node: {
        paths: ["src"],
        extensions: [".js", ".ts", "jsx", "tsx", ".d.ts"],
      },
    },
    compilerOptions: {
      moduleResolution: "node",
    },
  },
}
