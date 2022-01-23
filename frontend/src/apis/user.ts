import axios from "axios";
import { API } from "constants/constants";

export const getUserinfo = async () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const checkAccessToken = accessToken !== null ? accessToken : '';

  const res = await axios.get(API + '/user/profile', { 
    headers: { 'x-access-token': checkAccessToken }
  })

  console.log('getUserinfo: ', res)
  
  return res.data;
}

//로그인 요청.
export const login = async ({email, password}:{email: string, password: string}) => {
  const res = await axios.post(API + '/user/login', {
    email: email, password: password
  });

  if(res.data) {
    let token: string = res.data['token'];

    //얻어온 토큰을 세션 스토리지에 보관.
    sessionStorage.setItem("accessToken", token);
  }

  console.log('login: ', res)

  return res.data
}

// 등록 api
export const register = async (email: string, nickname: string, password: string, admin: boolean) => {
  const res = await axios.post(API + '/user/register', {
    email: email,
    nickname: nickname,
    password: password,
    admin: admin
  })

  console.log('register: ', res)

  return res
}