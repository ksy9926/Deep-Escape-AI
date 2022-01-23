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

const initialState: UserState = {
  nickname: '',
  admin: false
};

const userReducer = createReducer<UserState, UserAction>(initialState, {
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
