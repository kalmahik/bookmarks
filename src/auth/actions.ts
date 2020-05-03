import { LOGIN_FETCH_REQUESTED } from './saga';

export const loginAction = (username: string, password: string) => ({
    type: LOGIN_FETCH_REQUESTED,
    payload: { username, password },
});
