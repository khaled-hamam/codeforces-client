module.exports = {
  env: {
    es6: true,
    node: true,
    "jest/globals": true
  },
  extends: [
    'airbnb-base',
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:jest/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'jest'
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": 2,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"]
      }
    }
  }
};
