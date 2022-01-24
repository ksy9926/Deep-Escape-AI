import { getUserinfoAsync, GET_USERINFO, setUserinfoAsync, SET_USERINFO, resetUserinfoAsync, RESET_USERINFO } from "redux/actions/userAction";
import { getUserinfo, login } from "apis/user";
import { call, put, takeEvery } from 'redux-saga/effects'

// 유저 정보 불러오기 사가
function* getUserinfoSaga(action: ReturnType<typeof getUserinfoAsync.request>) {
  try {
    const data: {nickname: string, admin:boolean} = yield call(getUserinfo);
    console.log('saga안 data: ', data)
    yield put(getUserinfoAsync.success(data))
  } catch(e: any) {
    yield put(getUserinfoAsync.failure(e));
  }
}

// 유저 정보 변경 사가
function* setUserinfoSaga(action: ReturnType<typeof setUserinfoAsync.request>) {
  try {
    const data: {nickname: string, admin:boolean} = yield call(login, action.payload);
    console.log('saga안 data: ', data)
    yield put(setUserinfoAsync.success(data))
  } catch(e: any) {
    yield put(setUserinfoAsync.failure(e));
  }
}

// 유저 정보 리셋 사가
function* resetUserinfoSaga(action: ReturnType<typeof resetUserinfoAsync.request>) {
  try {
    yield put(resetUserinfoAsync.success())
  } catch(e: any) {
    yield put(resetUserinfoAsync.failure(e));
  }
}

// takeEvery로 모든 dispatch 처리
export function* userSaga() {
  yield takeEvery(GET_USERINFO, getUserinfoSaga)
  yield takeEvery(SET_USERINFO, setUserinfoSaga)
  yield takeEvery(RESET_USERINFO, resetUserinfoSaga)
}