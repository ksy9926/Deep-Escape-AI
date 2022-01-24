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

const initialState: StudioState = {
  token: '',
  text: '',
  videoKey: ''
};

const studioReducer = createReducer<StudioState, StudioAction>(initialState, {
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
