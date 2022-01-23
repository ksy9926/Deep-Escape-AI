import { useEffect, useState } from 'react';
import { generateClientTokenAsync, makeVideoAsync } from 'redux/actions/studioAction';
import { getModelList, findProject } from 'apis/studio';
import { postVideo } from 'apis/video';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';

const AdminPage = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [progress, setProgress] = useState<string | number>('waiting');

  const { appId, clientHostname, token, uuid, videoKey } = useSelector(
    (state: RootState) => state.studio,
  );

  useEffect(() => {
    if (videoKey) {
      let interval = setInterval(async () => {
        const res = await findProject({ token: token, videoKey: videoKey });
        setProgress(res.data.progress);
        if (res.data.progress === 100) clearInterval(interval);
      }, 3000);
    }
  }, [videoKey]);

  const makeVideoHandler = () => {
    dispatch(makeVideoAsync.request({ token: token, text: text }));
  };

  return (
    <div
      style={{
        marginTop: '60px',
        height: '500px',
      }}
    >
      <button onClick={() => dispatch(generateClientTokenAsync.request())}>initiailizing</button>
      <button
        onClick={() => {
          getModelList(token);
        }}
      >
        getModelList
      </button>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => makeVideoHandler()}>makeVideo</button>
      {/* <button onClick={() => projectHandler()}>findProject</button> */}
      <div>{progress === 'waiting' ? progress : progress + '%'}</div>
      <div style={{ width: '100px', height: '50px', background: 'green', position: 'relative' }}>
        <div
          style={{
            width: '20px',
            height: '50px',
            position: 'absolute',
            background: 'blue',
            top: 0,
            left: 0,
          }}
        ></div>
      </div>
      <button
        onClick={() =>
          postVideo(
            'award',
            'https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_2_1bc78c2dd385a76e88a0c95bf8d2822e.mp4',
          )
        }
      >
        백엔드 저장하기
      </button>
    </div>
  );
};

export default AdminPage;
