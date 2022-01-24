import * as studioActions from 'redux/actions/studioAction'
import * as userActions from 'redux/actions/userAction'
import * as videoActions from 'redux/actions/videoAction'
import { ActionType } from "typesafe-actions";

// studio 상태 타입
export interface StudioState {
  token: string,
  text: string,
  videoKey: string
}

// user 상태 타입
export interface UserState {
  nickname: string,
  admin: boolean,
}

// video 상태 타입
export type VideoState = {
  videoId: number,
  type: string,
  url: string
}[]

// studio, user, video 액션 타입
export type StudioAction = ActionType<typeof studioActions>;
export type UserAction = ActionType<typeof userActions>;
export type VideoAction = ActionType<typeof videoActions>;

// AI STUDIOS 토큰 생성 res 타입
export interface GenerateClientTokenType {
  appId: string,
  platform: string,
  succeed: boolean,
  token: string,
  tokenExpire: number
}

// AI STUDIOS 영상 생성 키 타입
interface MakeVideoDataType {
  key: string
}

// AI STUDIOS 영상 생성 res 타입
export interface MakeVideoType {
  data: MakeVideoDataType,
  success: boolean
}

// AI STUDIOS 모델 정보 res 타입
export interface GetModelListType {
  models: any[]
}