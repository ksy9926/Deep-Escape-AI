import * as studioActions from 'redux/actions/studioAction'
import * as userActions from 'redux/actions/userAction'
import * as videoActions from 'redux/actions/videoAction'
import { ActionType } from "typesafe-actions";

export interface StudioState {
  appId: string,
  clientHostname: string,
  isClientToken: boolean,
  platform: string,
  sdk_v: string,
  token: string,
  uuid: string,
  clothes: string,
  language: string,
  model: string,
  text: string,
  videoKey: string
}

export interface UserState {
  nickname: string,
  admin: boolean,
}

export type VideoState = {
  videoId: number,
  type: string,
  url: string
}[]

export type StudioAction = ActionType<typeof studioActions>;
export type UserAction = ActionType<typeof userActions>;
export type VideoAction = ActionType<typeof videoActions>;

export interface GenerateClientTokenType {
  appId: string,
  platform: string,
  succeed: boolean,
  token: string,
  tokenExpire: number
}

interface MakeVideoDataType {
  key: string
}

export interface MakeVideoType {
  data: MakeVideoDataType,
  success: boolean
}

export interface GetModelListType {
  models: any[]
}