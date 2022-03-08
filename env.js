module.exports = {
  // 开发环境
  dev: {
    NODE_ENV: 'dev',
    BASE_API: 'http://192.168.50.78:9999', // 开发服务器地址
    PAY_BASE_URL: 'http://192.168.50.78:9999',
  },
  // http://192.168.50.78:9999/pro/project/ProjectPropertiesController/queryById
  // 测试环境
  test: {
    NODE_ENV: 'test',
    BASE_API: '', // 测试服务器地址
  },
  // 生产环境
  pro: {
    NODE_ENV: 'production',
    BASE_API: '', // 正式服务器地址
  },
}
