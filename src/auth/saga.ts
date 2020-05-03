import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchLoginApi } from './api';

export const LOGIN_FETCH_REQUESTED = 'LOGIN_FETCH_REQUESTED';
export const LOGIN_FETCH_SUCCESS = 'LOGIN_FETCH_SUCCESS';
export const LOGIN_FETCH_ERROR = 'LOGIN_FETCH_ERROR';

export const LOGOUT_FETCH_REQUESTED = 'LOGOUT_FETCH_REQUESTED';
export const LOGOUT_FETCH_SUCCESS = 'LOGOUT_FETCH_SUCCESS';
export const LOGOUT_FETCH_ERROR = 'LOGOUT_FETCH_ERROR';

function* fetchLogin({ payload }) {
    try {
        yield put({ type: LOGIN_FETCH_ERROR, payload: { error: null } });
        const { username, password } = payload;
        const response = yield call(fetchLoginApi, username.trim(), password);
        const { Data, Message, Success } = response.data;
        if (Success) {
            yield put({
                type: LOGIN_FETCH_SUCCESS,
                payload: { username, token: Data },
            });
        } else {
            yield put({ type: LOGIN_FETCH_ERROR, payload: { error: Message } });
        }
    } catch (error) {
        yield put({
            type: LOGIN_FETCH_ERROR,
            payload: { error: error.message },
        });
    }
}

function* fetchLogout() {
    yield put({ type: LOGOUT_FETCH_SUCCESS });
}

export function* authSaga() {
    // If you have multiple Sagas watching for different actions
    yield takeLatest(LOGIN_FETCH_REQUESTED, fetchLogin);
    yield takeLatest(LOGOUT_FETCH_REQUESTED, fetchLogout);
    // yield fork(sighOutFlow);
}
