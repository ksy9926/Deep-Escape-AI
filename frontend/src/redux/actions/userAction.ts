import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { UserState } from 'types/types';

// 유저 정보 받아오기 타입
export const GET_USERINFO = 'user/GET_USERINFO' as const
export const GET_USERINFO_SUCCESS = 'user/GET_USERINFO_SUCCESS' as const
export const GET_USERINFO_ERROR = 'user/GET_USERINFO_ERROR' as const

// 유저 정보 변경 타입
export const SET_USERINFO = 'user/SET_USERINFO' as const
export const SET_USERINFO_SUCCESS = 'user/SET_USERINFO_SUCCESS' as const
export const SET_USERINFO_ERROR = 'user/SET_USERINFO_ERROR' as const

// 유저 정보 리셋 타입
export const RESET_USERINFO = 'user/RESET_USERINFO' as const
export const RESET_USERINFO_SUCCESS = 'user/RESET_USERINFO_SUCCESS' as const
export const RESET_USERINFO_ERROR = 'user/RESET_USERINFO_ERROR' as const

// 유저 정보 받아오기 액션
export const getUserinfoAsync = createAsyncAction(
  GET_USERINFO,
  GET_USERINFO_SUCCESS,
  GET_USERINFO_ERROR
)<undefined, UserState, AxiosError>();
  
// 유저 정보 변경 액션
export const setUserinfoAsync = createAsyncAction(
  SET_USERINFO,
  SET_USERINFO_SUCCESS,
  SET_USERINFO_ERROR
)<{email: string, password: string}, UserState, AxiosError>();

// 유저 정보 리셋 액션
export const resetUserinfoAsync = createAsyncAction(
  RESET_USERINFO,
  RESET_USERINFO_SUCCESS,
  RESET_USERINFO_ERROR
)<undefined, undefined, AxiosError>();