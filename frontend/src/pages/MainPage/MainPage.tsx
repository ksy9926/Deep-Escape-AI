import { useEffect, useState } from 'react';
import { getTest, postTest } from 'apis/api';
import { getModelList, findProject } from 'apis/studio';
import { MainWrap, MainBanner } from 'styles/mainStyle';
import { useDispatch, useSelector } from 'react-redux';
import { generateClientTokenAsync, makeVideoAsync } from 'redux/actions/studioAction';
import { RootState } from 'redux/reducers';
import Introduction from 'components/MainPage/Introduction';

const MainPage = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { appId, clientHostname, token, uuid, videoKey } = useSelector(
    (state: RootState) => state.studio,
  );

  useEffect(() => {
    async function fetchData() {
      const res = await getTest();
      console.log('res: ', res);
      return res;
    }
    fetchData();
  }, []);

  const postHandler = () => {
    postTest('제목 테스트');
  };

  return (
    <MainWrap>
      <MainBanner>
        {/* <video src="test.mp4" width="100%" height="100%" /> */}
        <video src="./game.mp4" width="100%" autoPlay loop muted>
          {/* <source
            src="https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_2_7b067af2fcf8f5853d11c2a4b977b40e.mp4"
            type="video/mp4"
          /> */}
          {/* <source
            src="https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_2_408f8f4ea825ce76776b436a6e766422.mp4"
            type="video/mp4"
          /> */}
        </video>
        <div style={{ position: 'absolute', bottom: '25%', right: '20%' }}>
          <span style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
            AI가 전하는 <br />
            방탈출 <br />
            소식 및 정보
          </span>
        </div>
      </MainBanner>
      <Introduction />
      <button onClick={postHandler}>등록 테스트</button>
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
    </MainWrap>
  );
};

export default MainPage;
