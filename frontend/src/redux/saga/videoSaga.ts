import { getVideosAsync, GET_VIDEOS } from "redux/actions/videoAction";
import { getVideos } from "apis/video";
import { call, put, takeEvery } from 'redux-saga/effects'

// 영상 조회 사가
function* getVideosSaga(action: ReturnType<typeof getVideosAsync.request>) {
  try {
    // const data: any[] = yield call(getVideos);
    // console.log('saga안 data: ', data)
    // yield put(getVideosAsync.success(data))
  } catch(e: any) {
    yield put(getVideosAsync.failure(e));
  }
}

// takeEvery로 모든 dispatch 처리
export function* videoSaga() {
  yield takeEvery(GET_VIDEOS, getVideosSaga)
}