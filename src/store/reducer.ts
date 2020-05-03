import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers } from 'redux';
import { appointmentsReducer } from '../appointments/reducer';
import { authReducer } from '../auth/reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: null,
    blacklist: ['authReducer', 'appointmentsReducer'],
};

const authConfig = {
    key: 'authReducer',
    storage: AsyncStorage,
    blacklist: ['error'],
};

const appointmentsConfig = {
    key: 'appointmentsReducer',
    storage: AsyncStorage,
    blacklist: [],
};

export const reducer = persistReducer(
    persistConfig,
    combineReducers({
        authReducer: persistReducer(authConfig, authReducer),
        appointmentsReducer: persistReducer(
            appointmentsConfig,
            appointmentsReducer,
        ),
    }),
);
