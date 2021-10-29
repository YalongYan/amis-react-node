import React, { useEffect, useState } from 'react';
import { Select, message, Switch, Divider } from 'antd';
import { history } from 'umi';

import { propTypes } from './type';
import './index.less';

const LayoutHeader: React.FC<propTypes> = (props) => {
  const { saveEditorData, handleChangeView, title } = props;
  const [name, setName] = useState<string>('');

  useEffect(() => {
    console.log('finish');
  }, []);

  const handleChange = (v) => {
    handleChangeView(v);
  };

  const handleSave = () => {
    saveEditorData();
  };

  return (
    <div className="layoutHeaderCtn">
      <div className="title">{title}</div>
      <div className="editor-btn">
        <label>
          预览 <Switch className="headerSwitch" size="small" onChange={handleChange} />
        </label>
      </div>
      <Divider style={{ borderColor: '#6d6a6a' }} type="vertical" />
      <div className="editor-btn" onClick={handleSave}>
        保存
      </div>
      <Divider style={{ borderColor: '#6d6a6a' }} type="vertical" />
      <div
        className="editor-btn"
        onClick={() => {
          history.push(`/chartList`);
        }}
      >
        返回
      </div>
    </div>
  );
};

export default LayoutHeader;
