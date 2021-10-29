const config = {
  dev: {
    // 本地开发环境
    env: 'development',
    port: '1753',
    BasePath: 'http://127.0.0.1:8080',
  },
  test: {
    // 测试环境
    env: 'test',
    port: '1752',
    BasePath: 'http://127.0.0.1:8080',
  },
  production: {
    // 生产环境
    env: 'production',
    port: '1751',
    BasePath: 'http://127.0.0.1:8080',
  },
};
module.exports = config[process.env.NODE_ENV || 'dev'];
