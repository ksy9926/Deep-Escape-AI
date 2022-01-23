import { combineReducers } from 'redux';
import studio from 'redux/reducers/studioReducer';
import user from 'redux/reducers/userReducer';
import video from 'redux/reducers/videoReducer';
import { all } from 'redux-saga/effects'
import { studioSaga } from 'redux/saga/studioSaga';
import { userSaga } from 'redux/saga/userSaga';
import { videoSaga } from 'redux/saga/videoSaga';

const rootReducer = combineReducers({
  studio,
  user,
  video
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([studioSaga(), userSaga(), videoSaga()])
}