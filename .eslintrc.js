module.exports = {
  root: true,
  env: {
    'browser': true,
    'es6': true,
    'node': true,
  },
  // globals: {
  //  Vue: 'readonly'
  //},
  parserOptions: {
     parser: 'babel-eslint', // 支持babel新语法
    // 'ecmaVersion': 2019, // es版本
    // 'sourceType': 'module' // js模块化
  },
  extends: [
    'eslint:recommended',
    // google
    'google',
    // vue
    'plugin:vue/recommended', // FIXME: Failed to load config plugin:vue/vue3-recommended to extend from.
    // prettier
    'plugin:prettier/recommended'
  ],
  plugins: [
    // eslint-config-prettier (禁用eslint中与prettier冲突的配置)
    'prettier'
  ],
  rules: {
    // eslint-plugin-prettier 配置 （prettier读取eslint中的配置）（生成模式关闭格式化，否则导致打包慢）
    "prettier/prettier": [process.env.NODE_ENV === 'production' ? "off" : "error", 
    // prettier 规则配置
    {
      'printWidth': 100, // 一行代码超过这个值换行
      'endOfLine': 'auto', // 换行cr检查
      'singleQuote': true, // 启动单引号
      'semi': false, // 语句结尾无分号
      'trailingComma': 'none' // 对象最后一个属性是否需要添加逗号
    }],
    // google
    // eslint
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产时无console语句
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产时无debugger关键字
    'prefer-promise-reject-errors': 'off', // reject时必须new Error返回错误信息，有利于代码栈追踪 （增加代码复杂度，非大型项目不需要）
    'valid-jsdoc': 'off', // 注释检查 （由于object中的方法缺少注释插件，很不好修改，暂时这么着）
    'no-invalid-this': 'off', // 禁止 this 关键字在类或类对象之外出现 （有时候是this在函数里被call间接调用）
    // vue
    'vue/no-use-v-if-with-v-for': 'off', // 太多没法改，然而关不了
  }
}