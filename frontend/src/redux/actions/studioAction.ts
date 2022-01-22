import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

export const GENERATE_CLIENT_TOKEN = 'studio/GENERATE_CLIENT_TOKEN' as const
export const GENERATE_CLIENT_TOKEN_SUCCESS = 'studio/GENERATE_CLIENT_TOKEN_SUCCESS' as const
export const GENERATE_CLIENT_TOKEN_ERROR = 'studio/GENERATE_CLIENT_TOKEN_ERROR' as const

export const MAKE_VIDEO = 'studio/MAKE_VIDEO' as const
export const MAKE_VIDEO_SUCCESS = 'studio/MAKE_VIDEO_SUCCESS' as const
export const MAKE_VIDEO_ERROR = 'studio/MAKE_VIDEO_ERROR' as const

export const generateClientTokenAsync = createAsyncAction(
  GENERATE_CLIENT_TOKEN,
  GENERATE_CLIENT_TOKEN_SUCCESS,
  GENERATE_CLIENT_TOKEN_ERROR
  // 아래 줄은 각각의 매개 변수 타입
)<undefined, string, AxiosError>();

export const makeVideoAsync = createAsyncAction(
  MAKE_VIDEO,
  MAKE_VIDEO_SUCCESS,
  MAKE_VIDEO_ERROR
  // 아래 줄은 각각의 매개 변수 타입
)<any, string, AxiosError>();