import React, { useState, useEffect } from 'react';
import { Layout, Menu, Dropdown, message, ConfigProvider, Select } from 'antd';
import { history } from 'umi';
import './index.less';
import { DownOutlined } from '@ant-design/icons';

import { userInfoType } from './type';

const { Header, Sider, Content } = Layout;

const MainIndex: React.FC = (props) => {
  const [userInfo, setUserInfo] = useState<userInfoType>();
  const [showHeader, setShowHeader] = useState<boolean>(true);

  useEffect(() => {
    initUserInfo();
  }, []);

  // 由于 header的存在 导致 编辑器 的修改弹层位置不对
  useEffect(() => {
    initIsShowHeader();
  }, [location.pathname]);

  const initUserInfo = () => {
    const username = localStorage.getItem('username') || '';
    const email = localStorage.getItem('email') || '';
    if (!username) {
      message.warn('请先登录');
      setTimeout(() => {
        history.push('/login');
      }, 800);
    }
    setUserInfo({
      username,
      email,
    });
  };

  const initIsShowHeader = () => {
    if (location.pathname === '/editor' || location.pathname === '/view') {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  };

  const userInfoMenu = (
    <Menu>
      <Menu.Item key="1">
        <a
          onClick={() => {
            handleConfirm();
          }}
          style={{ color: '#7a7a7a', display: 'inline-block', width: '100%' }}
        >
          退出
        </a>
      </Menu.Item>
    </Menu>
  );

  const handleConfirm = () => {
    localStorage.clear();
    message.success('退出成功');
    setTimeout(() => {
      history.push('/login');
    }, 1000);
  };

  return (
    <div className="mainLayoutCtn">
      <Layout>
        <Layout className="site-layout">
          {showHeader && (
            <Header className="site-layout-header site-layout-background" style={{ padding: 0 }}>
              <img className="mainIcon" src="https://baidu.gitee.io/amis/static/logo_c812f54.png" />
              <Dropdown className="dorpCtn" overlay={userInfoMenu}>
                <div className="personInfoCtn">
                  <span className="userName">{userInfo?.username}</span>
                  <span className="userLogo">
                    <img src="http://si1.go2yd.com/get-image/0bVwH1EStDU" alt="头像" />
                  </span>
                </div>
              </Dropdown>
            </Header>
          )}
          <Content className="site-layout-main site-layout-background">{props.children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainIndex;
