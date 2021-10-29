/**
 * API 登录验证
 * @param {Object} ctx ctx
 * @param {function} next next
 */
async function loginCheck(ctx, next) {
  if (ctx.cookies && ctx.cookies.get('currentEmail')) {
    await next();
  } else {
    ctx.body = {
      status: 'failed',
      code: 401,
      data: '请重新登录',
    };
  }
}

module.exports = {
  loginCheck,
};
