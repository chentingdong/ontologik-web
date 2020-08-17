module.exports = {
  plugins: [
    "tailwind-components",
    "react-hot-loader/babel",
    "macros",
    [
      "wildcard",
      {
        exts: ["js", "jsx", "ts", "tsx", ""],
      },
    ],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  sourceType: "unambiguous",
  sourceMaps: true,
  retainLines: true,
  env: {
    production: {
      presets: ["minify"],
    },
    test: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },
  },
}
