const Sequelize = require('sequelize');
const seq = require('../seq');

/**
 * chart表, 存放chart信息
 * 用户用现在的邮箱 就不用创建表了
 * email // 邮箱
 * userName // 用户名
 * title // 卡片标题
 * chartData // 存的 JSON.stringify() 之后的对象字符串
 * chartStatus // 1是仅保存， 2是发布  发布状态才可以访问
 */

const Chart = seq.define('chart', {
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  chartData: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  chartStatus: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Chart;
