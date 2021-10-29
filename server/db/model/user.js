const Sequelize = require('sequelize');
const seq = require('../seq');

/**
 * user表 登录是用 邮箱 和 密码， 用户名用于展示当前登录人
 * email // 邮箱
 * password // 密码
 * userName // 用户名
 */

const User = seq.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
