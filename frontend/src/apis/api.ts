import axios from "axios";

// const api = 'http://localhost:8080';
const api = 'http://ec2-13-209-99-205.ap-northeast-2.compute.amazonaws.com:8080'
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
  const res = await axios.post(api + '/')

  return res.data
}

// 등록 api
export const postTest = async (title: string) => {
  const res = await axios.post(api + '/test/post', {
    title: title
  })
}