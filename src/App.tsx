import 'react-native-gesture-handler';
import * as React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { LoggedInNavigator, LoggedOutNavigator } from './navigator';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, connect } from 'react-redux';
import { persistor, store } from './store/store';
import { selectToken } from './auth/reducer';

const NavigatorContainer = ({ token }) => {
    return (
        <NavigationContainer>
            {token ? LoggedInNavigator() : LoggedOutNavigator()}
        </NavigationContainer>
    );
};

const mapStateToProps = (state) => ({
    token: selectToken(state),
});

const AppNavigator = connect(mapStateToProps)(NavigatorContainer);

export const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator />
            </PersistGate>
        </Provider>
    );
};
