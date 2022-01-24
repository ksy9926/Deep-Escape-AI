import axios from "axios"
import { CLIENT, STUDIO_API } from "constants/constants";


export const generateClientToken = async () => {
  const res = await axios.get(STUDIO_API + `/generateClientToken?appId=${CLIENT.appId}&userKey=${CLIENT.uuid}`);

  console.log("generateClientToken: ", res.data);
  return res.data
}

export const getModelList = async (token: string) => {
  const res = await axios.post(STUDIO_API + '/getModelList', {
    appId: CLIENT.appId,
    clientHostname: CLIENT.clientHostname,
    isClientToken: CLIENT.isClientToken,
    platform: CLIENT.platform,
    sdk_v: CLIENT.sdk_v,
    token: token,
    uuid: CLIENT.uuid,
  })

  console.log("getModelList: ", res.data);
}

export const makeVideo = async ({token, text}:{token: string, text: string}) => {
  const res = await axios.post(STUDIO_API + '/makeVideo', {
    appId: CLIENT.appId,
    clientHostname: CLIENT.clientHostname,
    isClientToken: CLIENT.isClientToken,
    platform: CLIENT.platform,
    sdk_v: CLIENT.sdk_v,
    token: token,
    uuid: CLIENT.uuid,
    clothes: '2',
    language: 'ko',
    model: 'ysy',
    text: text,
  })

  console.log("makeVideo: ", res.data);
  return res.data
};

export const findProject = async ({token, videoKey}:{token: string, videoKey: string}) => {
  const res = await axios.post(STUDIO_API + '/findProject', {
    key: videoKey,
    appId: CLIENT.appId,
    clientHostname: CLIENT.clientHostname,
    isClientToken: CLIENT.isClientToken,
    platform: CLIENT.platform,
    sdk_v: CLIENT.sdk_v,
    token: token,
    uuid: CLIENT.uuid,
  });

  console.log("findProject: ", res.data);
  return res.data
};