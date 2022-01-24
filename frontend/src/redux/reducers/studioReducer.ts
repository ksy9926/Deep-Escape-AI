import { createReducer } from 'typesafe-actions';
import { StudioState, StudioAction } from 'types/types';
import {
  GENERATE_CLIENT_TOKEN,
  GENERATE_CLIENT_TOKEN_SUCCESS,
  GENERATE_CLIENT_TOKEN_ERROR,
  MAKE_VIDEO,
  MAKE_VIDEO_SUCCESS,
  MAKE_VIDEO_ERROR
} from 'redux/actions/studioAction';

// studio 초기 상태 설정
const initialState: StudioState = {
  token: '',
  text: '',
  videoKey: ''
};

const studioReducer = createReducer<StudioState, StudioAction>(initialState, {
  // AI STUDIOS 토큰 생성 리듀서
  [GENERATE_CLIENT_TOKEN]: (state) => ({
    ...state,
  }),
  [GENERATE_CLIENT_TOKEN_SUCCESS]: (state, action) => ({
    ...state,
    token: action.payload
  }),
  [GENERATE_CLIENT_TOKEN_ERROR]: (state, action) => ({
    ...state,
  }),
  // AI STUDIOS 영상 생성 리듀서
  [MAKE_VIDEO]: (state, action) => ({
    ...state,
  }),
  [MAKE_VIDEO_SUCCESS]: (state, action) => ({
    ...state,
    videoKey: action.payload
  }),
  [MAKE_VIDEO_ERROR]: (state, action) => ({
    ...state
  })
});

export default studioReducer;
