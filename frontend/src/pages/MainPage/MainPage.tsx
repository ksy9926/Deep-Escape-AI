import React from 'react';
import { postTest } from 'apis/api';

const MainPage = () => {
  const postHandler = () => {
    postTest('제목 테스트');
  };

  return (
    <>
      <div>MainPage</div>
      <button onClick={postHandler}>등록 테스트</button>
    </>
  );
};

export default MainPage;
