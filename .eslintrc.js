module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // 'plugin:@fellow/coffee/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    // '@fellow/coffee'
    'vue',
  ],
  // add your custom rules here
  rules: {
    'warn-ignored' : 0,
    'no-ignored-warnings': 0,
    'no-warning-comments': 0,
  }
}
