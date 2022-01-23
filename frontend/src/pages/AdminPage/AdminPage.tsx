import { useEffect, useState } from 'react';
import { generateClientTokenAsync, makeVideoAsync } from 'redux/actions/studioAction';
import { getModelList, findProject } from 'apis/studio';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import RegisterPage from './RegisterPage';

const AdminPage = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [accessToken, setAccessToken] = useState<string | null>('');

  useEffect(() => {
    setAccessToken(sessionStorage.getItem('accessToken'));
  }, []);

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState(false);
  const { appId, clientHostname, token, uuid, videoKey } = useSelector(
    (state: RootState) => state.studio,
  );

  console.log('admin: ', admin);

  return (
    <div
      style={{
        marginTop: '60px',
      }}
    >
      <RegisterPage />
      <button onClick={() => dispatch(generateClientTokenAsync.request())}>initiailizing</button>
      <button
        onClick={() => {
          getModelList(token);
        }}
      >
        getModelList
      </button>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(makeVideoAsync.request({ token: token, text: text }))}>
        makeVideo
      </button>
      <button
        onClick={() => {
          findProject({ token: token, videoKey: videoKey });
        }}
      >
        findProject
      </button>
    </div>
  );
};

export default AdminPage;
