// 去除 obj中 value 值为空的 key
const removeEmptyKeys = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== '' && obj[key] !== null) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

// 把日期格式转为年-月-日
const getFormedTime = (d) => {
  let year = d.getFullYear();
  let day = d.getDate();
  let month = d.getMonth() + 1;
  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  return `${year}-${month}-${day}`;
};

module.exports = {
  removeEmptyKeys,
  getFormedTime,
};
