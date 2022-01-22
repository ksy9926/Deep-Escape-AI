import { useEffect, useState } from 'react';
import { getTest, postTest } from 'apis/api';
import { getModelList, findProject } from 'apis/studio';
import 'assets/test.mp4';
import { MainWrap, MainBanner } from 'styles/mainStyle';
import { useDispatch, useSelector } from 'react-redux';
import { generateClientTokenAsync, makeVideoAsync } from 'redux/actions/studioAction';
import { RootState } from 'redux/reducers';

const MainPage = () => {
  const dispatch = useDispatch();
  const { appId, clientHostname, token, uuid, videoKey } = useSelector(
    (state: RootState) => state.studio,
  );

  console.log('token: ', token);
  console.log('videoKey: ', videoKey);

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
        <video src="assets/test.mp4" />
        MainPage
      </MainBanner>
      <button onClick={postHandler}>등록 테스트</button>
      <button onClick={() => dispatch(generateClientTokenAsync.request())}>initiailizing</button>
      <button
        onClick={() => {
          getModelList({
            appId: appId,
            clientHostname: clientHostname,
            isClientToken: true,
            platform: 'web',
            sdk_v: '1.0',
            token: token,
            uuid: uuid,
          });
        }}
      >
        getModelList
      </button>
      <button
        onClick={() =>
          dispatch(
            makeVideoAsync.request({
              appId: appId,
              clientHostname: clientHostname,
              isClientToken: true,
              platform: 'web',
              sdk_v: '1.0',
              token: token,
              uuid: uuid,
              clothes: '2',
              language: 'ko',
              model: 'ysy',
              text: '방탈출이란 일정 시간동안 방에 갇혀 상황에 맞는 추리를 통해 문제를 풀고 탈출을 해야 하는 일종의 게임입니다.',
            }),
          )
        }
      >
        makeVideo
      </button>
      <button
        onClick={() => {
          findProject({
            key: videoKey,
            appId: appId,
            clientHostname: clientHostname,
            isClientToken: true,
            platform: 'web',
            sdk_v: '1.0',
            token: token,
            uuid: uuid,
          });
        }}
      >
        findProject
      </button>
    </MainWrap>
  );
};

export default MainPage;
