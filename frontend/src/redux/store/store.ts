import { createStore, applyMiddleware } from 'redux';
import rootReducers, { rootSaga } from 'redux/reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

// 스토어 생성
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

// 루트 사가 실행
sagaMiddleware.run(rootSaga);

export { store };
