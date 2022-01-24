import { createReducer } from 'typesafe-actions';
import { UserState, UserAction } from 'types/types';
import {
  GET_USERINFO,
  GET_USERINFO_SUCCESS,
  GET_USERINFO_ERROR,
  SET_USERINFO,
  SET_USERINFO_SUCCESS,
  SET_USERINFO_ERROR,
  RESET_USERINFO,
  RESET_USERINFO_SUCCESS,
  RESET_USERINFO_ERROR,
} from 'redux/actions/userAction';

// user 초기 상태 설정
const initialState: UserState = {
  nickname: '',
  admin: false
};

const userReducer = createReducer<UserState, UserAction>(initialState, {
  // 유저 정보 받아오기 리듀서
  [GET_USERINFO]: (state) => ({
    ...state,
  }),
  [GET_USERINFO_SUCCESS]: (state, action) => ({
    ...state,
    nickname: action.payload.nickname,
    admin: action.payload.admin
  }),
  [GET_USERINFO_ERROR]: (state, action) => ({
    ...state,
  }),
  // 유저 정보 변경
  [SET_USERINFO]: (state) => ({
    ...state,
  }),
  [SET_USERINFO_SUCCESS]: (state, action) =>{ 
    console.log('reducer action:', action);
    
    return {
    ...state,
    nickname: action.payload.nickname,
    admin: action.payload.admin
  }},
  [SET_USERINFO_ERROR]: (state, action) => ({
    ...state,
  }),
  // 유저 정보 리셋 리듀서
  [RESET_USERINFO]: (state) => ({
    ...state,
  }),
  [RESET_USERINFO_SUCCESS]: (state, action) => ({
    ...state,
    nickname: '',
    admin: false
  }),
  [RESET_USERINFO_ERROR]: (state, action) => ({
    ...state,
  }),
});

export default userReducer;
