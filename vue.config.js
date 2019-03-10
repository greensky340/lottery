// module.exports = {
//   publicPath: '/', // 根路径
//   outputDir: 'dist', // 构建输出
//   assetsDir: 'assets', // 静态资源目录（js css img fonts）
//   lintOnSave: false, // 是否开始eslint 有效值 false true 'error'
//   devServer: {
//     open: true, // 编译完成后是否开启浏览器
//     host: 'localhost', // 域名
//     port: 8080, // 端口
//     https: false, // 是否开启https 有效值 http，https
//     hotOnly: false, // 是否开启热更新
//     proxy: {
//       // 跨域配置
//       '/apis': {
//         target: 'http://lottery.localhost/', // 源地址
//         changeOrigin: true, // 改变源
//         ws: true,
//         pathRewrite: {
//           '^/apis': '' // 路径重写
//         }
//       }
//     },
//     before (app) {
//       // app.get('/apis/goods.php', (req, res) => {
//       //   res.json()
//       // })
//       console.log('90')
//     }
//   }
// }
