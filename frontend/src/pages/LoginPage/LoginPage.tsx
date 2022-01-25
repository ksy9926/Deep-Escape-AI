import { useEffect, useState } from 'react';
import { register } from 'apis/user';
import { useDispatch, useSelector } from 'react-redux';
import { setUserinfoAsync } from 'redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'redux/reducers';
import { Form, Input, Button, Space, Select, message } from 'antd';
import { LoginWrap, LoginInnerWrap, LoginText, LoginForm } from 'styles/loginStyle';

const { Option } = Select;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(true);
  const [admin, setAdmin] = useState(false);
  const user = useSelector((state: RootState) => state.user);

  // 로그인 성공시 메세지 출력
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

  // 로그인 핸들러
  const loginHandler = (v: any) => {
    dispatch(setUserinfoAsync.request({ email: v.email, password: v.password }));
  };

  // 회원가입 핸들러
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

  // 로그인 또는 회원가입 실패 핸들러
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <LoginWrap>
      <LoginInnerWrap>
        {/* Login Info : 로그인 문구 UI */}
        <LoginText>
          <strong>회원가입</strong> 후 더 다양한 <br />
          서비스를 이용해보세요!
        </LoginText>
        <LoginForm>
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
            {/* Login Info : 관리자 여부 입력 UI */}
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
            {/* Login Info : 이메일 입력 UI */}
            <Form.Item
              label="이메일"
              name="email"
              rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>
            {/* Login Info : 닉네임 입력 UI */}
            {!loginState && (
              <Form.Item
                label="닉네임"
                name="nickname"
                rules={[{ required: true, message: 'Please input your nickname!' }]}
              >
                <Input />
              </Form.Item>
            )}
            {/* Login Info : 비밀번호 입력 UI */}
            <Form.Item
              label="비밀번호"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            {/* Login Info : 비밀번호 확인 입력 UI */}
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
                      return Promise.reject(new Error('passwords are not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
            )}
            {/* Login Info : 로그인 / 회원가입 버튼 UI */}
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
        </LoginForm>
      </LoginInnerWrap>
    </LoginWrap>
  );
};

export default LoginPage;
