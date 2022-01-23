import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

export const GET_VIDEOS = 'video/GET_VIDEOS' as const
export const GET_VIDEOS_SUCCESS = 'video/GET_VIDEOS_SUCCESS' as const
export const GET_VIDEOS_ERROR = 'video/GET_VIDEOS_ERROR' as const

export const getVideosAsync = createAsyncAction(
  GET_VIDEOS,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR
  // 아래 줄은 각각의 매개 변수 타입
)<undefined, any[], AxiosError>();