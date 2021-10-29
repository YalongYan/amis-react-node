export interface chartDataTypes {
  id?: number;
  email: string;
  title?: string;
  userName: string;
  chartData: string;
  chartStatus: '1' | '2'; // 1 是保存  2是发布
  createdAt?: string;
  updateAt?: string;
}

export interface onlyIdObjType {
  id: string | number;
}

export interface onlyEmailObjType {
  email: string;
}
