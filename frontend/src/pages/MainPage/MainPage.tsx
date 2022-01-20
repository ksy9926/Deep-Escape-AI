import React, { useEffect, useState } from 'react';
import { getTest, postTest } from 'apis/api';

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
    <>
      <div>MainPage</div>
      <button onClick={postHandler}>등록 테스트</button>
    </>
  );
};

export default MainPage;
