import { useEffect, useState } from 'react';
import { generateClientTokenAsync } from 'redux/actions/studioAction';
import { makeVideo, findProject } from 'apis/studio';
import { postVideo } from 'apis/video';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducers';
import { VIDEO_TYPE } from 'constants/constants';
import { AdminWrap } from 'styles/adminStyle';
import { getVideos } from 'apis/video';

const AdminPage = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState<string | number>('waiting');
  const [introVideo, setIntroVideo] = useState({ url: '', text: '', videoId: 0 });
  const [isModify, setIsModify] = useState(false);
  const [videoKey, setVideoKey] = useState('');
  const { token } = useSelector((state: RootState) => state.studio);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getVideos(VIDEO_TYPE.introduction);

      setIntroVideo(res);
    };

    fetchData();
    dispatch(generateClientTokenAsync.request());

    return () => {
      console.log('close');
    };
  }, []);

  useEffect(() => {
    if (videoKey) {
      let interval = setInterval(async () => {
        const res = await findProject({ token: token, videoKey: videoKey });
        setProgress(res.data.progress);
        if (res.data.progress === 100) {
          setUrl(res.data.video);
          clearInterval(interval);
        }
      }, 3000);
    }
  }, [videoKey]);

  const makeVideoHandler = async () => {
    const res = await makeVideo({ token: token, text: text });
    setVideoKey(res.data.key);
  };

  console.log('videoKey: ', videoKey);

  return (
    <AdminWrap>
      <div>인트로 영상</div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          {introVideo.url && <video height="500px" src={introVideo.url} controls />}
        </div>
        <div style={{ flex: 1 }}>
          <div>종류: 방탈출 소개</div>
          <div>텍스트: {introVideo.text}</div>
          <div style={{ display: 'flex' }}>
            <button onClick={() => setIsModify(!isModify)}>{isModify ? '취소' : '수정'}</button>
          </div>
          {isModify && (
            <>
              <textarea onChange={(e) => setText(e.target.value)} />
              <button onClick={() => makeVideoHandler()}>makeVideo</button>
              <div>{progress === 'waiting' ? progress : progress + '%'}</div>
              <div
                style={{
                  width: '100px',
                  height: '50px',
                  background: 'green',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: `${progress}px`,
                    height: '50px',
                    position: 'absolute',
                    background: 'blue',
                    top: 0,
                    left: 0,
                  }}
                ></div>
              </div>
              {progress === 100 && (
                <>
                  <button
                    onClick={() =>
                      postVideo(VIDEO_TYPE.introduction, url, text, introVideo.videoId)
                    }
                  >
                    백엔드 저장하기
                  </button>
                  <a href={url} style={{ color: '#000' }}>
                    영상 다운로드
                  </a>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </AdminWrap>
  );
};

export default AdminPage;
