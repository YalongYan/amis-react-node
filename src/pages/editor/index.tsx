import React, { useEffect, useState } from 'react';
import { Select, message } from 'antd';
import { history } from 'umi';

import { Editor } from 'amis-editor';
import 'amis/lib/themes/default.css';
import 'amis-editor/dist/style.css';
import 'font-awesome/css/font-awesome.css';

import { editorInitValue } from './config';
import { chartDataTypes } from '@/config/common.request';
import LayoutHeader from '@/components/header';
import { getChartDetail, addChart, updateChart } from '@/services/chart';

import './index.less';

const EditorCtn: React.FC = (props) => {
  // const [editValue, setEditValue] = useState<any>(editorInitValue);
  const [editValue, setEditValue] = useState<any>();
  const [previewStatus, setPreviewStatus] = useState<boolean>(false);
  const [id, setId] = useState<number>();
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const historyState: any = history.location.state;
    if (historyState && historyState.id) {
      setId(historyState.id);
      setTitle(historyState.title);
      const res = await getChartDetail({ id: historyState.id });
      if (res.status === 200 && res.data) {
        let chartData = res.data.chartData;
        if (chartData) {
          setEditValue(JSON.parse(chartData));
        }
      }
    }
  };

  const handleEditorChange = (v) => {
    setEditValue(v);
  };

  // const changePreviewStatus = () => {
  //   console.log(!previewStatus);
  //   setPreviewStatus(!previewStatus);
  // };

  const handleSave = async () => {
    const editValueStr = JSON.stringify(editValue);
    const username = localStorage.getItem('username') || '';
    const nickname = localStorage.getItem('nickname') || '';
    let req: chartDataTypes = {
      email: username,
      userName: nickname,
      chartData: editValueStr,
      chartStatus: '1', // 已发布的不能编辑 所以编辑的status 比是 1
    };
    if (id) {
      req['id'] = id;
      let result = await updateChart(req);
      if (result.data.msg) {
        message.success('请求成功');
      }
    } else {
      // 下面这个用不到了 id 肯定存在
      let result = await addChart(req);
      if (result.status === 200 && result.data) {
        message.success('添加成功');
        setTimeout(() => {
          history.push(`/chartList`);
        }, 800);
      }
    }
  };

  const changeView = (v) => {
    setPreviewStatus(v);
  };
  return (
    <div className="editorCtn">
      <LayoutHeader title={title} saveEditorData={handleSave} handleChangeView={changeView} />
      <Editor className="editContainer" value={editValue} preview={previewStatus} onChange={handleEditorChange} />
    </div>
  );
};

export default EditorCtn;
