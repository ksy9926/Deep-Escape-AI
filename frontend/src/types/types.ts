import * as actions from 'redux/actions/studioAction'
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

export type StudioAction = ActionType<typeof actions>;

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