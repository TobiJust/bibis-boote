module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["plugin:prettier/recommended", "eslint:recommended", "google"],
  plugins: ["prettier"],
  rules: {
    quotes: ["error", "double"],
    "prettier/prettier": "error",
  },
}
