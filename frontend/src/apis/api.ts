import axios from "axios";
import { API } from "constants/constants";

// type Temp = {
//   temp: string
// }

// 조회 api
// export const fetchTodosInfo = async () => {
//   // 받아오는 res.data의 type이 axios.get<> 안에 들어감.
//   const res = await axios.get<Temp>(api + '/todos');
//   return res.data
// };

export const getTest = async () => {
  const res = await axios.get(API + '/')

  return res.data
}

// 등록 api
export const postTest = async (title: string) => {
  const res = await axios.post(API + '/test/post', {
    title: title
  })
}