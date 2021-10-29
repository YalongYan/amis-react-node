import axios from 'axios';

export const login = async (obj) => {
  const res = await axios.post('/node/login', obj);
  return res;
};
