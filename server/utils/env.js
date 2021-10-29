const ENV = process.env.NODE_ENV;

module.exports = {
  isProd: ENV === 'production',
};
