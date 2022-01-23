import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

export const GET_USERINFO = 'user/GET_USERINFO' as const
export const GET_USERINFO_SUCCESS = 'user/GET_USERINFO_SUCCESS' as const
export const GET_USERINFO_ERROR = 'user/GET_USERINFO_ERROR' as const

export const SET_USERINFO = 'user/SET_USERINFO' as const
export const SET_USERINFO_SUCCESS = 'user/SET_USERINFO_SUCCESS' as const
export const SET_USERINFO_ERROR = 'user/SET_USERINFO_ERROR' as const

export const getUserinfoAsync = createAsyncAction(
  GET_USERINFO,
  GET_USERINFO_SUCCESS,
  GET_USERINFO_ERROR
  // 아래 줄은 각각의 매개 변수 타입
)<undefined, string, AxiosError>();
  
export const setUserinfoAsync = createAsyncAction(
  SET_USERINFO,
  SET_USERINFO_SUCCESS,
  SET_USERINFO_ERROR
  // 아래 줄은 각각의 매개 변수 타입
)<{email: string, password: string}, {nickname:string, admin:boolean}, AxiosError>();