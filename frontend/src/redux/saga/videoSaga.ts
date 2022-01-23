import { getVideosAsync, GET_VIDEOS } from "redux/actions/videoAction";
import { getVideos } from "apis/video";
import { call, put, takeEvery } from 'redux-saga/effects'

function* getVideosSaga(action: ReturnType<typeof getVideosAsync.request>) {
  try {
    const data: any[] = yield call(getVideos);
    console.log('saga안 data: ', data)
    yield put(getVideosAsync.success(data))
  // any 없애면 오류남. 나중에 알아볼 것.
  } catch(e: any) {
    yield put(getVideosAsync.failure(e));
  }
}

export function* videoSaga() {
  yield takeEvery(GET_VIDEOS, getVideosSaga)
}