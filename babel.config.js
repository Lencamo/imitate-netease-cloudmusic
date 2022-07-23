module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        // 默认情况
        // style: true
        // 使用vant样式变量时

        // 指定样式路径
        style: (name) => `${name}/style/less`
      },
      'vant'
    ]
  ]
}
