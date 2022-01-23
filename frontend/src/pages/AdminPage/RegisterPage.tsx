import { useState } from 'react';
import { getUserinfo, login, register } from 'apis/user';
import { useDispatch, useSelector } from 'react-redux';
import { setUserinfoAsync } from 'redux/actions/userAction';
import { RootState } from 'redux/reducers';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);
  const user = useSelector((state: RootState) => state.user);

  console.log('admin: ', admin);
  console.log('user.admin: ', user.admin);
  console.log('user.nickname: ', user.nickname);

  const registerHandler = () => {
    register(email, nickname, password, admin);
  };

  function logout() {
    if (!sessionStorage.getItem('accessToken')) {
      return;
    }

    sessionStorage.removeItem('accessToken');
    // globalStore.setUserName("");
    // routeChange("/");
  }

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
          <button onClick={() => getUserinfo()}>getUserinfo</button>
          <button
            onClick={() => dispatch(setUserinfoAsync.request({ email: email, password: password }))}
          >
            로그인하기
          </button>
          <button onClick={() => logout()}>로그아웃하기</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
