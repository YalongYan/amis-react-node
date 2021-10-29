import React, { useEffect, useState } from 'react';
import { history } from 'umi';

import { Editor } from 'amis-editor';
import 'amis/lib/themes/default.css';
import 'amis-editor/dist/style.css';
import 'font-awesome/css/font-awesome.css';

import { getChartDetail } from '@/services/chart';

import './index.less';

const EditorCtn: React.FC = (props) => {
  const [editValue, setEditValue] = useState<any>();
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const historyState: any = history.location.state;
    let id: string = '';
    if (history.location.query) {
      id = history.location.query['id'] as string;
    }
    if (id) {
      const res = await getChartDetail({ id });
      if (res.status === 200 && res.data) {
        let chartData = res.data.chartData;
        if (chartData) {
          setEditValue(JSON.parse(chartData));
        }
        setTitle(res.data.title);
      }
    }
  };

  const handleEditorChange = (v) => {
    setEditValue(v);
  };

  return (
    <div className="viewCtn">
      <div className="titleCtn">{title}</div>
      <Editor className="editContainer" value={editValue} preview={true} onChange={handleEditorChange} />
    </div>
  );
};

export default EditorCtn;
