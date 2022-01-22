import axios from "axios"
import { client, STUDIO_API } from "constants/constants";


export const generateClientToken = async () => {
  const res = await axios.get(STUDIO_API + `/generateClientToken?appId=${client.appId}&userKey=${client.uuid}`);

  console.log("generateClientToken: ", res.data);
  return res.data
}

export const getModelList = async (payload: any) => {
  const res = await axios.post(STUDIO_API + '/getModelList', payload)

  console.log("getModelList: ", res.data);
}

export const makeVideo = async (payload: any) => {
  const res = await axios.post(STUDIO_API + '/makeVideo', payload)

  console.log("makeVideo: ", res.data);
  return res.data
};

export const findProject = async (payload: any) => {
  const res = await axios.post(STUDIO_API + '/findProject', payload);

  console.log("findProject: ", res.data);
};