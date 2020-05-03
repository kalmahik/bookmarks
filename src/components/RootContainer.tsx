import { KeyboardAvoidingView } from 'react-native';
import { isIos } from '../utils/general';
import * as React from 'react';
import styled from 'styled-components';

export const RootContainer = ({ children }) => {
    return (
        <SafeAreaContainer>
            <KeyboardAvoidingView behavior={isIos ? 'padding' : 'height'}>
                <BackgroundContainer
                    source={require('../assets/background.png')}
                    resizeMode="cover"
                >
                {children}
                </BackgroundContainer>
            </KeyboardAvoidingView>
        </SafeAreaContainer>
    );
};

const SafeAreaContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const BackgroundContainer = styled.ImageBackground`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 400px;
`;
