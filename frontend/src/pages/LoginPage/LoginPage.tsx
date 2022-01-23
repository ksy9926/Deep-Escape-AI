import { useEffect, useState } from 'react';
import { register } from 'apis/user';
import { useDispatch, useSelector } from 'react-redux';
import { setUserinfoAsync } from 'redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'redux/reducers';
import { Form, Input, Button, Space, Select, message } from 'antd';
import { LoginWrap } from 'styles/loginStyle';

const { Option } = Select;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(true);
  const [admin, setAdmin] = useState(false);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user.nickname) {
      message.success({
        content: `${user.nickname}님 환영합니다!`,
        className: 'custom-class',
        style: {
          marginTop: '10vh',
        },
      });
      navigate('/');
    }
  }, [user]);

  const loginHandler = (v: any) => {
    dispatch(setUserinfoAsync.request({ email: v.email, password: v.password }));
  };

  const registerHandler = async (v: any) => {
    const res = await register(v.email, v.nickname, v.password, admin);
    if (res === 'success') {
      navigate('/');
      message.success({
        content: `회원가입에 성공하였습니다!`,
        className: 'custom-class',
        style: {
          marginTop: '10vh',
        },
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <LoginWrap>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={loginState ? loginHandler : registerHandler}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          admin: false,
        }}
      >
        {!loginState && (
          <Form.Item
            label="관리자 여부"
            name="admin"
            hasFeedback
            rules={[{ required: true, message: 'Please select user type!' }]}
          >
            <Select placeholder="Please select a admin" onChange={(v) => setAdmin(v)}>
              <Option value={false}>일반 유저</Option>
              <Option value={true}>관리자</Option>
            </Select>
          </Form.Item>
        )}
        <Form.Item
          label="이메일"
          name="email"
          rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
        {!loginState && (
          <Form.Item
            label="닉네임"
            name="nickname"
            rules={[{ required: true, message: 'Please input your nickname!' }]}
          >
            <Input />
          </Form.Item>
        )}
        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        {!loginState && (
          <Form.Item
            label="비밀번호 확인"
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The two passwords that you entered do not match!'),
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        )}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              {loginState ? '로그인' : '회원가입'}
            </Button>
            <Button type="primary" onClick={() => setLoginState(!loginState)}>
              {loginState ? '회원가입 하기' : '로그인 하기'}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </LoginWrap>
  );
};

export default LoginPage;
