import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

// 영상 조회 타입
export const GET_VIDEOS = 'video/GET_VIDEOS' as const
export const GET_VIDEOS_SUCCESS = 'video/GET_VIDEOS_SUCCESS' as const
export const GET_VIDEOS_ERROR = 'video/GET_VIDEOS_ERROR' as const

// 영상 조회 액션
export const getVideosAsync = createAsyncAction(
  GET_VIDEOS,
  GET_VIDEOS_SUCCESS,
  GET_VIDEOS_ERROR
)<undefined, any[], AxiosError>();