const { Chart } = require('../db/model/index');
const { removeEmptyKeys } = require('./../utils/common');

// 获取列表
async function getChartListByEmail(v) {
  const result = await Chart.findAll({
    where: {
      email: v,
    },
    order: ['updatedAt'],
  });
  return result.reverse();
}

// 添加
async function addChart(obj) {
  const result = await Chart.create(obj);
  const data = result.dataValues;
  return data;
}

// 修改
async function updateChart(obj) {
  const { id } = obj;
  const updateData = removeEmptyKeys(obj);
  delete updateData.id;
  const result = await Chart.update(updateData, {
    where: {
      id,
    },
  });
  return result[0] > 0; // 修改的行数
}

// 获取详情
async function getChartDetail(v) {
  const result = await Chart.findOne({
    where: {
      id: v,
    },
  });
  return result;
}

// 删除
async function deleteChart(id) {
  const result = await Chart.destroy({
    where: {
      id,
    },
  });
  // result 删除的行数
  return result > 0;
}

module.exports = {
  addChart,
  updateChart,
  getChartListByEmail,
  getChartDetail,
  deleteChart,
};
