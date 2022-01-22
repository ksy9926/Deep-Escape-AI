import { combineReducers } from 'redux';
import studio from 'redux/reducers/studioReducer';
import { all } from 'redux-saga/effects'
import { studioSaga } from 'redux/saga/studioSaga';

const rootReducer = combineReducers({
  studio
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([studioSaga()])
}