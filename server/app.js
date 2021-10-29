const Koa = require('koa');
const koabody = require('koa-body');
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const path = require('path');
// const cacheControl = require('koa-cache-control');
const router = require('./route');

const app = new Koa();

// error handler
onerror(app);

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type');
  ctx.set('Access-Control-Allow-Methods', 'POST');
  await next();
});

app.use(json());
app.use(logger());
app.use(require('koa-static')(path.join(__dirname, '..', 'dist')));

console.log(__dirname + '/views');
app.use(
  views(__dirname + '/views', {
    map: { html: 'ejs' },
  }),
);

app.use(
  koabody({
    multipart: true,
    formidable: {
      uploadDir: path.resolve(__dirname, 'static/'),
      keepExtensions: true,
      multipart: true,
    },
  }),
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(router.routes()).use(router.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
