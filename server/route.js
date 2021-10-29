const nodeChartServer = require('./routes/api/chart');
const nodeUserServer = require('./routes/api/user');

const Router = require('koa-router');
let router = new Router();

function initRoute() {
  router.use(nodeChartServer.routes(), nodeChartServer.allowedMethods());
  router.use(nodeUserServer.routes(), nodeUserServer.allowedMethods());
}

initRoute();

module.exports = router;
