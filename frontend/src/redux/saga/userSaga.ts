import { getUserinfoAsync, GET_USERINFO, setUserinfoAsync, SET_USERINFO, resetUserinfoAsync, RESET_USERINFO } from "redux/actions/userAction";
import { getUserinfo, login } from "apis/user";
import { call, put, takeEvery } from 'redux-saga/effects'

function* getUserinfoSaga(action: ReturnType<typeof getUserinfoAsync.request>) {
  try {
    const data: {nickname: string, admin:boolean} = yield call(getUserinfo);
    console.log('saga안 data: ', data)
    yield put(getUserinfoAsync.success(data))
  // any 없애면 오류남. 나중에 알아볼 것.
  } catch(e: any) {
    yield put(getUserinfoAsync.failure(e));
  }
}

function* setUserinfoSaga(action: ReturnType<typeof setUserinfoAsync.request>) {
  try {
    const data: {nickname: string, admin:boolean} = yield call(login, action.payload);
    console.log('saga안 data: ', data)
    yield put(setUserinfoAsync.success(data))
  // any 없애면 오류남. 나중에 알아볼 것.
  } catch(e: any) {
    yield put(setUserinfoAsync.failure(e));
  }
}

function* resetUserinfoSaga(action: ReturnType<typeof resetUserinfoAsync.request>) {
  try {
    yield put(resetUserinfoAsync.success())
  // any 없애면 오류남. 나중에 알아볼 것.
  } catch(e: any) {
    yield put(resetUserinfoAsync.failure(e));
  }
}

export function* userSaga() {
  yield takeEvery(GET_USERINFO, getUserinfoSaga)
  yield takeEvery(SET_USERINFO, setUserinfoSaga)
  yield takeEvery(RESET_USERINFO, resetUserinfoSaga)
}