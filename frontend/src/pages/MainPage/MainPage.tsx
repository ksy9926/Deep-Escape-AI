import { useEffect } from 'react';
import { getTest, postTest } from 'apis/api';
import { MainWrap, MainBanner } from 'styles/mainStyle';
import Introduction from 'components/MainPage/Introduction';
import Awards from 'components/MainPage/Awards';
import { Fade } from 'react-awesome-reveal';

const MainPage = () => {
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
        <video src="./game.mp4" width="100%" autoPlay loop muted />
        {/* <video src="https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_2_7b067af2fcf8f5853d11c2a4b977b40e.mp4" /> */}
        <div style={{ position: 'absolute', bottom: '25%', right: '20%' }}>
          <Fade direction="left">
            <span style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
              AI가 전하는 <br />
              방탈출 <br />
              소식 및 정보
            </span>
          </Fade>
        </div>
      </MainBanner>
      <Introduction />
      <Awards />
      <button onClick={postHandler}>등록 테스트</button>
    </MainWrap>
  );
};

export default MainPage;
