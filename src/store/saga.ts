import { authSaga } from '../auth/saga';
import { all } from 'redux-saga/effects';

export function* rootSaga() {
    yield all([authSaga()]);
}
