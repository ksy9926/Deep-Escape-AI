import axios from "axios";
import { API } from "constants/constants";
import { type } from "os";

// 영상 조회
export const getVideos = async () => {
  const res = await axios.get(API + '/video');

  console.log('getVideos: ', res)

  return res.data
}

// 영상 등록
export const postVideo = async (type: string, url: string) => {
  const res = await axios.post(API + '/video', {
    type: type,
    url: url
  })

  console.log('postVideo: ', res)

  return res.data
}