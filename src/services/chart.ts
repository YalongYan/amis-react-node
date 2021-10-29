import axios from 'axios';

import { chartDataTypes, onlyIdObjType, onlyEmailObjType } from '@/config/common.request';

export const getChartList = async (obj: onlyEmailObjType) => {
  const res = await axios.post('/node/getChartList', obj);
  return res;
};

export const getChartDetail = async (obj: onlyIdObjType) => {
  const res = await axios.post('/node/getChartDetailById', obj);
  return res;
};

export const addChart = async (obj: chartDataTypes) => {
  const res = await axios.post('/node/addChart', obj);
  return res;
};

export const updateChart = async (obj: chartDataTypes) => {
  const res = await axios.post('/node/updateChart', obj);
  return res;
};

export const deleteChart = async (obj: onlyIdObjType) => {
  const res = await axios.post('/node/deleteChart', obj);
  return res;
};
