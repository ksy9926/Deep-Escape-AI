import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

// AI STUDIOS 토큰 생성 타입
export const GENERATE_CLIENT_TOKEN = 'studio/GENERATE_CLIENT_TOKEN' as const
export const GENERATE_CLIENT_TOKEN_SUCCESS = 'studio/GENERATE_CLIENT_TOKEN_SUCCESS' as const
export const GENERATE_CLIENT_TOKEN_ERROR = 'studio/GENERATE_CLIENT_TOKEN_ERROR' as const

// AI STUDIOS 영상 생성 타입
export const MAKE_VIDEO = 'studio/MAKE_VIDEO' as const
export const MAKE_VIDEO_SUCCESS = 'studio/MAKE_VIDEO_SUCCESS' as const
export const MAKE_VIDEO_ERROR = 'studio/MAKE_VIDEO_ERROR' as const

// AI STUDIOS 토큰 생성 액션
export const generateClientTokenAsync = createAsyncAction(
  GENERATE_CLIENT_TOKEN,
  GENERATE_CLIENT_TOKEN_SUCCESS,
  GENERATE_CLIENT_TOKEN_ERROR
)<undefined, string, AxiosError>();

// AI STUDIOS 영상 생성 액션
export const makeVideoAsync = createAsyncAction(
  MAKE_VIDEO,
  MAKE_VIDEO_SUCCESS,
  MAKE_VIDEO_ERROR
)<any, string, AxiosError>();