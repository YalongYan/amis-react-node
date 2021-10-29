const { User } = require('../db/model/index');

/**
 * 登录
 * @param {邮箱} email
 * @param {密码} passWord
 * @returns
 */
async function loginIn(email, passWord) {
  try {
    const result = await User.findOne({
      attributes: ['userName', 'email'],
      where: {
        email: email,
        password: passWord,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return '';
  }
}

module.exports = {
  loginIn,
};
