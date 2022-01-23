import { useState } from 'react';
import { register } from 'apis/user';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);

  console.log('admin: ', admin);

  const registerHandler = () => {
    const res = register(email, nickname, password, admin);

    console.log('register res: ', res);
  };

  return (
    <div
      style={{
        marginTop: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div>
        <div>
          <div>어드민레벨</div>
          <input type="checkbox" onChange={() => setAdmin(!admin)} />
        </div>
        <div>
          <div>이메일</div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <div>닉네임</div>
          <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
        </div>
        <div>
          <div>비밀번호</div>
          <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button onClick={() => registerHandler()}>회원가입하기</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
