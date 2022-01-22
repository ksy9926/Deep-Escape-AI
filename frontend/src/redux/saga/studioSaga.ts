import { generateClientTokenAsync, GENERATE_CLIENT_TOKEN, makeVideoAsync, MAKE_VIDEO } from "redux/actions/studioAction";
import { generateClientToken, makeVideo } from "apis/studio";
import { call, put, takeEvery } from 'redux-saga/effects'
import { GenerateClientTokenType, MakeVideoType } from 'types/types'

function* generateClientTokenSaga(action: ReturnType<typeof generateClientTokenAsync.request>) {
  try {
    const data: GenerateClientTokenType = yield call(generateClientToken);
    console.log('saga안 data: ', data)
    yield put(generateClientTokenAsync.success(data.token))
  // any 없애면 오류남. 나중에 알아볼 것.
  } catch(e: any) {
    yield put(generateClientTokenAsync.failure(e));
  }
}

function* makeVideoSaga(action: ReturnType<typeof makeVideoAsync.request>) {
  try {
    const data: MakeVideoType = yield call(makeVideo, action.payload);
    console.log('saga안 data: ', data)
    yield put(makeVideoAsync.success(data.data.key))
  // any 없애면 오류남. 나중에 알아볼 것.
  } catch(e: any) {
    yield put(makeVideoAsync.failure(e));
  }
}

// function* postTodosSaga(action: ReturnType<typeof postTodosAsync.request>) {
//   try {
//     const data: TodoType = yield call(createTodosInfo, action.payload);
//     yield put(postTodosAsync.success(data))
//   // any 없애면 오류남. 나중에 알아볼 것.
//   } catch(e: any) {
//     yield put(postTodosAsync.failure(e));
//   }
// }

// function* putTodosSaga(action: ReturnType<typeof putTodosAsync.request>) {
//   try {
//     const data: TodoType = yield call(putTodosInfo, action.payload);
//     console.log('put data: ', data)
//     yield put(putTodosAsync.success(action.payload))
//   // any 없애면 오류남. 나중에 알아볼 것.
//   } catch(e: any) {
//     yield put(putTodosAsync.failure(e));
//   }
// }

// function* deleteTodosSaga(action: ReturnType<typeof deleteTodosAsync.request>) {
//   try {
//     yield call(deleteTodosInfo, action.payload);
//     yield put(deleteTodosAsync.success(action.payload))
//   // any 없애면 오류남. 나중에 알아볼 것.
//   } catch(e: any) {
//     yield put(deleteTodosAsync.failure(e));
//   }
// }

export function* studioSaga() {
  yield takeEvery(GENERATE_CLIENT_TOKEN, generateClientTokenSaga)
  yield takeEvery(MAKE_VIDEO, makeVideoSaga)
  // yield takeEvery(PUT_TODOS, putTodosSaga)
  // yield takeEvery(DELETE_TODOS, deleteTodosSaga)
}