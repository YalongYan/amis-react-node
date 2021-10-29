const router = require('koa-router')();

/* GET home page. */
router.all('/', async (ctx, next) => {
  // ctx.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  // ctx.set('Pragma', 'no-cache');
  // ctx.set('Expires', '0');
  // res.render('index', { title: 'ugp' });
  await ctx.render('index', {
    title: 'ugp',
  });
});

module.exports = router;
