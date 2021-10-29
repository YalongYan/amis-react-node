const { isProd } = require('../utils/env');

let MYSQL_CONF = {
  host: 'localhost',
  user: 'root',
  password: '12345678',
  port: '3306',
  database: 'ugp',
};

if (isProd) {
  // 生产环境的数据库配置 这里先用本地配置代替了
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    port: '3306',
    database: 'ugp',
  };
}

module.exports = {
  MYSQL_CONF,
};
