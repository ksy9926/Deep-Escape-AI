import axios from "axios"
import { client, STUDIO_API } from "constants/constants";


export const generateClientToken = async () => {
  const res = await axios.get(STUDIO_API + `/generateClientToken?appId=${client.appId}&userKey=${client.uuid}`);

  console.log("generateClientToken: ", res.data);
  return res.data
}

export const getModelList = async (token: string) => {
  const res = await axios.post(STUDIO_API + '/getModelList', {
    appId: client.appId,
    clientHostname: client.clientHostname,
    isClientToken: client.isClientToken,
    platform: client.platform,
    sdk_v: client.sdk_v,
    token: token,
    uuid: client.uuid,
  })

  console.log("getModelList: ", res.data);
}

export const makeVideo = async ({token, text}:{token: string, text: string}) => {
  const res = await axios.post(STUDIO_API + '/makeVideo', {
    appId: client.appId,
    clientHostname: client.clientHostname,
    isClientToken: client.isClientToken,
    platform: client.platform,
    sdk_v: client.sdk_v,
    token: token,
    uuid: client.uuid,
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
    appId: client.appId,
    clientHostname: client.clientHostname,
    isClientToken: client.isClientToken,
    platform: client.platform,
    sdk_v: client.sdk_v,
    token: token,
    uuid: client.uuid,
  });

  console.log("findProject: ", res.data);
};