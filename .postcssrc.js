module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 设置 font-size 基准值
      propList: ['*'] // 使用范围
    }
  }
}
