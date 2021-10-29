import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { history } from 'umi';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// @ts-ignore: Unreachable code error
import { login } from '@/services/login';

import './index.less';

interface resDataType {
  businessPermissions: string;
  email: string;
  menuPermissions: string;
  modulePermissions: string;
  productNames: string;
  role: string;
  userName: string;
}

const LoginPage: React.FC = () => {
  const onFinish = async (values: any) => {
    const res = await login(values);
    console.log(res);
    if (res.data && res.data['code'] !== -1) {
      let userInfo = res.data;
      let { userName, email } = userInfo;
      localStorage.setItem('username', userName);
      localStorage.setItem('email', email);
      message.success('登录成功');

      setTimeout(() => {
        history.push('/chartList');
      }, 800);
    }
  };

  return (
    <div className="loginCtn">
      <div className="centerBody">
        <div className="loginHeader">
          <img className="loginIcon" src="https://baidu.gitee.io/amis/static/logo_c812f54.png" />
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            autoLogin: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: '请输入邮箱',
              },
            ]}
          >
            <Input
              style={{ height: '40px' }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="邮箱"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input
              style={{ height: '40px' }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button
              style={{ width: '100%', height: '40px' }}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
