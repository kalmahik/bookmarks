import {
    LOGIN_FETCH_SUCCESS,
    LOGIN_FETCH_ERROR,
    LOGOUT_FETCH_SUCCESS,
} from './saga';

interface InitialState {
    username: string | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: InitialState = {
    username: null,
    token: null,
    isLoading: false,
    error: null,
};

export const authReducer = function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_FETCH_SUCCESS: {
            console.log(action);
            return {
                ...state,
                username: action.payload.username,
                token: action.payload.token,
            };
        }
        case LOGIN_FETCH_ERROR: {
            return { ...state, error: action.payload.error };
        }
        case LOGOUT_FETCH_SUCCESS: {
            return initialState;
        }
        default:
            return state;
    }
};

export const selectUsername = (state): string => state.authReducer.username;
export const selectToken = (state): string => state.authReducer.token;
export const selectError = (state): string => state.authReducer.error;
