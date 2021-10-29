// 传入时间戳 获取 yyyy-mm-dd hh:mm:ss
export const getFullDateByTime = (timer: number) => {
  let time = new Date(timer);
  let year = time.getFullYear();
  let month: string | number = time.getMonth() + 1;
  let day: string | number = time.getDate();
  let h: string | number = time.getHours();
  let m: string | number = time.getMinutes();
  let s: string | number = time.getSeconds();
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  return `${year}-${month}-${day} ${h}:${m}:${s}`;
};
