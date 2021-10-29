const seq = require('./seq');

require('./model/index');

// 测试连接
seq
  .authenticate()
  .then(() => {
    console.log('auth ok');
  })
  .catch((err) => {
    console.log('auth err');
    console.log(err);
  });

// 执行同步
// force true 会先把之前的表删除， 再新建
// 默认是 false 是直接创建， 如果已经存在表了，并且表里面有数据，想保留原有数据的话， 就用false
// seq.sync({ force: true }).then(() => {
seq.sync().then(() => {
  // seq.sync().then(() => {
  console.log('sync ok');
  // 执行完成退出 sql 连接
  process.exit();
});
