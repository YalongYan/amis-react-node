const router = require('koa-router')();
const { addChart, updateChart, getChartListByEmail, getChartDetail, deleteChart } = require('../../services/chart');
// const { loginCheck } = require('../../middleWares/loginChecks');

// node层的接口 加这个前缀
router.prefix('/node');

// 获取详情
router.post('/getChartDetailById', async (ctx, next) => {
  const obj = ctx.request.body;
  const { id } = obj;
  const res = await getChartDetail(id);
  ctx.body = res;
});

router.post('/addChart', async (ctx, next) => {
  const obj = ctx.request.body;
  const res = await addChart(obj);
  ctx.body = res;
});

router.post('/getChartList', async (ctx, next) => {
  const obj = ctx.request.body;
  const { email } = obj;
  const res = await getChartListByEmail(email);
  ctx.body = res;
});

router.post('/deleteChart', async (ctx, next) => {
  const obj = ctx.request.body;
  const { id } = obj;
  const res = await deleteChart(id);
  ctx.body = res;
});

router.post('/updateChart', async (ctx, next) => {
  const obj = ctx.request.body;
  const res = await updateChart(obj);
  if (res) {
    ctx.body = {
      msg: '修改成功',
    };
  } else {
    ctx.body = {
      msg: '修改失败',
    };
  }
});

module.exports = router;
