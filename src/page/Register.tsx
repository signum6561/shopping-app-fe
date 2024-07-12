import React from 'react';
import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import { toast } from "react-toastify";
import "../customStyles.css"

const Register: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: { email: string; password: string; confirmPassword: string }) => {
    console.log('onFinish triggered with values:', values);
    const { email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const regobj = { email, password, confirmPassword };
    console.log("regobj" , regobj)
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(regobj)
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Failed to register');
      }
      toast.success('Registered successfully.');
      navigate('/login');
    }).catch((err) => {
      toast.error('Failed: ' + err.message);
    });
  };

  return (
    <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
      <h1 className="text-4xl text-white font-bold text-center mb-6">Register</h1>
      <Form
        name="register"
        className="register-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input  className="bg-transparent text-white" prefix={<Icon className='absolute top-4 right-4 text-blue-400' icon="ph:user-fill" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input  className="bg-transparent text-white" prefix={<Icon className='absolute top-4 right-4 text-blue-400' icon="ic:round-lock" />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: 'Please confirm your Password!' }]}
        >
          <Input  className="bg-transparent text-white" prefix={<Icon className='absolute top-4 right-4 text-blue-400' icon="ic:round-lock" />} type="password" placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item>
          <div className='flex gap-5 justify-around items-center'>
            <Button type="primary" htmlType="submit" className="register-form-button bg-lime-500">
              Register
            </Button>
            Or
            <Button type="link" className="text-white" onClick={() => navigate('/login')}>
              Login
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
