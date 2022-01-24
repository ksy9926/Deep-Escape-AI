import { generateClientTokenAsync, GENERATE_CLIENT_TOKEN, makeVideoAsync, MAKE_VIDEO } from "redux/actions/studioAction";
import { generateClientToken, makeVideo } from "apis/studio";
import { call, put, takeEvery } from 'redux-saga/effects'
import { GenerateClientTokenType, MakeVideoType } from 'types/types'

// AI STUDIOS 토큰 생성 사가
function* generateClientTokenSaga(action: ReturnType<typeof generateClientTokenAsync.request>) {
  try {
    const data: GenerateClientTokenType = yield call(generateClientToken);
    console.log('saga안 data: ', data)
    yield put(generateClientTokenAsync.success(data.token))
  } catch(e: any) {
    yield put(generateClientTokenAsync.failure(e));
  }
}

// AI STUDIOS 영상 생성 사가
function* makeVideoSaga(action: ReturnType<typeof makeVideoAsync.request>) {
  try {
    const data: MakeVideoType = yield call(makeVideo, action.payload);
    console.log('saga안 data: ', data)
    yield put(makeVideoAsync.success(data.data.key))
  } catch(e: any) {
    yield put(makeVideoAsync.failure(e));
  }
}

// takeEvery로 모든 dispatch 처리
export function* studioSaga() {
  yield takeEvery(GENERATE_CLIENT_TOKEN, generateClientTokenSaga)
  yield takeEvery(MAKE_VIDEO, makeVideoSaga)
}