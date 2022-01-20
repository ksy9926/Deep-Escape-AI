import axios from 'axios';
import { useState } from 'react';

const MakePage = () => {
  const [token, setToken] = useState('');
  const [videoKey, setVideoKey] = useState('');

  let client = {
    appId: 'aistudios.com',
    uuid: '6443234b-77d5-4013-bfd6-bb9399f317d9',
    clientHostname: 'aistudios.com',
  };

  const generateClientToken = async () => {
    const res = await axios({
      method: 'GET',
      url: `http://localhost:3000/api/odin/generateClientToken?appId=${client.appId}&userKey=${client.uuid}`,
    });

    console.log('generateClientToken: ', res.data);
    setToken(res.data.token);
  };

  const getModelList = async () => {
    const res = await axios({
      method: 'POST',
      url: `http://localhost:3000/api/odin/getModelList`,
      data: {
        appId: client.appId,
        clientHostname: client.clientHostname,
        isClientToken: true,
        platform: 'web',
        sdk_v: '1.0',
        token: token,
        uuid: client.uuid,
      },
    });

    console.log('getModelList: ', res.data);
  };

  const makeVideo = async () => {
    const res = await axios({
      method: 'POST',
      url: `http://localhost:3000/api/odin/makeVideo`,
      data: {
        appId: client.appId,
        clientHostname: client.clientHostname,
        isClientToken: true,
        platform: 'web',
        sdk_v: '1.0',
        token: token,
        uuid: client.uuid,
        clothes: '2',
        language: 'ko',
        model: 'ysy',
        text: '안녕하세요. 더 지니어스에 오신 것을 환영합니다. 지금부터 룰을 설명하도록 하겠습니다.',
      },
    });

    console.log('makeVideo: ', res.data);
    setVideoKey(res.data.data.key);
  };

  const findProject = async () => {
    const res = await axios({
      method: 'POST',
      url: `http://localhost:3000/api/odin/findProject`,
      data: {
        key: videoKey,
        appId: client.appId,
        clientHostname: client.clientHostname,
        isClientToken: true,
        platform: 'web',
        sdk_v: '1.0',
        token: token,
        uuid: client.uuid,
      },
    });

    console.log('findProject: ', res.data);
  };

  console.log(videoKey);

  return (
    <div>
      <button onClick={generateClientToken}>generateClientToken</button>
      <button onClick={getModelList}>getModelList</button>
      <button onClick={makeVideo}>makeVideo</button>
      <button onClick={findProject}>findProject</button>
    </div>
  );
};

export default MakePage;
