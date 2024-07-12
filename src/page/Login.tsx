import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { Icon } from '@iconify/react/dist/iconify.js';
import "../customStyles.css"

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
        <Form
          name="login_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              prefix={<Icon className='absolute top-4 right-4 text-blue-400' icon="ph:user-fill" />}
              type="email"
              placeholder="Your Email"
              className="bg-transparent text-white"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<Icon className='absolute top-4 right-4 text-blue-400' icon="ic:round-lock" />}
              type="password"
              placeholder="Your Password"
              className="bg-transparent text-white"
            />
          </Form.Item>
          <Form.Item className="flex justify-between items-center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="text-white">Remember Me</Checkbox>
            </Form.Item>
            <Link to="" className="text-blue-500">Forgot Password?</Link>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
            >
              Login
            </Button>
            <div>
              <Button  type="link" className="text-white" onClick={() => navigate('/register')}>
                Register now
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
