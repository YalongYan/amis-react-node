const router = require('koa-router')();
const { loginIn } = require('../../services/user');

// node层的接口 加这个前缀
router.prefix('/node');

// 获取详情
router.post('/login', async (ctx, next) => {
  const obj = ctx.request.body;
  const { email, password } = obj;
  const res = await loginIn(email, password);
  ctx.body = res || {
    code: -1,
    mes: '账号密码错误',
  };
});

module.exports = router;
