import React, { useEffect, useState } from 'react';
import { Button, message, Table, Modal, Input, Tag, Popconfirm } from 'antd';
import { history } from 'umi';

import { getChartList } from '@/services/chart';
import { getFullDateByTime } from '@/utils/common';
import { listItemTypes } from './type';
import { updateChart, addChart, deleteChart } from '@/services/chart';

import './index.less';

const Container: React.FC = (props) => {
  const [dataList, setDataList] = useState<listItemTypes[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '卡片标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => {
        return getFullDateByTime(+new Date(text));
      },
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (text) => {
        return getFullDateByTime(+new Date(text));
      },
    },
    {
      title: '状态',
      dataIndex: 'chartStatus',
      key: 'chartStatus',
      render: (text) => {
        return <span>{text === '1' ? <Tag color="#87d068">已保存</Tag> : <Tag color="#108ee9">已发布</Tag>}</span>;
      },
    },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: (text, obj) => {
        return (
          <div>
            <Popconfirm
              title="确定删除吗?"
              okText="确定"
              cancelText="取消"
              disabled={obj['chartStatus'] === '2'}
              onConfirm={() => {
                handleDeleteById(obj['id']);
              }}
            >
              <Button type="link" disabled={obj['chartStatus'] === '2'}>
                删除
              </Button>
            </Popconfirm>
            <Button
              type="link"
              disabled={obj['chartStatus'] === '2'}
              onClick={() => {
                goToPage(obj['id'], obj['title']);
              }}
            >
              编辑
            </Button>
            <Button
              type="link"
              disabled={obj['chartStatus'] === '2'}
              onClick={() => {
                handleUpdateChart(obj, '2');
              }}
            >
              发布
            </Button>
            <Button
              type="link"
              disabled={obj['chartStatus'] === '1'}
              onClick={() => {
                handleUpdateChart(obj, '1');
              }}
            >
              撤回发布
            </Button>
            <Button
              type="link"
              disabled={obj['chartStatus'] === '1'}
              onClick={() => {
                history.push(`/view?id=${obj['id']}`);
              }}
            >
              查看
            </Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    initDataList();
  }, []);

  const handleDeleteById = async (id: number) => {
    const res = await deleteChart({ id });
    if (res.data) {
      message.success('删除成功');
      initDataList();
    } else {
      message.error('请求出错');
    }
  };

  const handleUpdateChart = async (obj, flag) => {
    obj['chartStatus'] = flag;
    const res = await updateChart(obj);
    if (res.status === 200 && res.data.msg) {
      message.success('请求成功');
      initDataList();
    }
  };

  const initDataList = async () => {
    const res = await getChartList({
      email: localStorage.getItem('username') || '',
    });
    if (res.status === 200 && res.data.length) {
      let result = res.data;
      result.forEach((item) => {
        item['key'] = item.id;
      });
      setDataList(res.data);
    }
  };

  const goToPage: (id: string, titleValue: string) => void = (id, titleValue) => {
    // history.push({
    //   pathname: '/editor',
    //   query: { id, id },
    // });
    history.push(`/editor`, { id, title: titleValue });
  };

  const handleOk = async () => {
    const email = localStorage.getItem('email') || '';
    const username = localStorage.getItem('username') || '';
    const res = await addChart({
      title: title,
      email: email,
      userName: username,
      chartData: '',
      chartStatus: '1',
    });
    if (res.status === 200 && res.data.id) {
      message.success('添加成功');
      setTimeout(() => {
        goToPage(res.data.id, title);
      }, 800);
    }
  };

  const handleOnChange = (v) => {
    setTitle(v.target.value);
  };

  return (
    <div className="chartListCtn">
      <div className="title">
        <span className="desc">我的看板</span>
        <Button
          className="newBtn"
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          新建看板
        </Button>
      </div>
      <Table dataSource={dataList} columns={columns} />
      <Modal
        title="新增卡片"
        visible={visible}
        onOk={handleOk}
        onCancel={() => {
          setVisible(false);
        }}
        okText="确认"
        cancelText="取消"
      >
        <div className="modelTitle">卡片标题:</div>
        <Input className="modelInput" onChange={handleOnChange} />
      </Modal>
    </div>
  );
};

export default Container;
