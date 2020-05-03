import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';
import { RootContainer } from '../components/RootContainer';
import { connect } from 'react-redux';
import { selectError, selectUsername } from '../auth/reducer';
import { COLORS } from '../constants';
import { loginAction } from '../auth/actions';

interface Props {
    usernameStored: string;
    errorStored: string;
    onLogin: (username: string, password: string) => void;
}

export const SignInScreenContainer = ({
    usernameStored,
    errorStored,
    onLogin,
}: Props) => {
    const [isPasswordHidden, setPasswordHidden] = useState(true);
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [error, setError] = useState<string | null>(errorStored);
    const passwordRef = useRef();

    useEffect(() => {
        setError(errorStored);
    }, [errorStored]);

    const onTogglePassword = () => {
        setPasswordHidden(!isPasswordHidden);
    };

    const onPasswordChange = (text: string) => {
        setPassword(text);
        if (error) {
            setError(null);
        }
    };

    const onUsernameChange = (text: string) => {
        setUsername(text);
        if (error) {
            setError(null);
        }
    };

    const onSubmitUsername = () => {
        passwordRef.current.focus();
    };

    const onSubmitLogin = () => {
        onLogin(username, password);
    };

    const eyeIcon = (
        <Icon
            name={isPasswordHidden ? 'eye-off-outline' : 'eye-outline'}
            color={isPasswordHidden ? COLORS.GRAY : COLORS.SOFT_BLACK}
            size={22}
            onPress={onTogglePassword}
        />
    );

    return (
        <RootContainer>
            <ContentContainer>
                <StyledInput
                    placeholder="E-mail "
                    spellCheck={false}
                    autoCorrect={false}
                    autoCapitalize="none"
                    autoCompleteType="username"
                    textContentType="username"
                    name="username"
                    value={username}
                    onChangeText={onUsernameChange}
                    returnKeyType="next"
                    onSubmitEditing={onSubmitUsername}
                    blurOnSubmit={false}
                />
                <StyledInput
                    ref={passwordRef}
                    placeholder="Пароль"
                    spellCheck={false}
                    autoCorrect={false}
                    autoCapitalize="none"
                    autoCompleteType="password"
                    textContentType="password"
                    name="password"
                    secureTextEntry={isPasswordHidden}
                    rightIcon={eyeIcon}
                    value={password}
                    onChangeText={onPasswordChange}
                    onSubmitEditing={onSubmitLogin}
                    error={error}
                />
                <LoginButton
                    title="Войти"
                    onPress={onSubmitLogin}
                    disabled={!username || !password}
                />
                <ForgotButton title="Забыли пароль?" />
            </ContentContainer>
        </RootContainer>
    );
};

const mapStateToProps = (state) => ({
    usernameStored: selectUsername(state),
    errorStored: selectError(state),
});

const mapDispatchToProps = {
    onLogin: loginAction,
};

export const SignInScreen = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignInScreenContainer);

const ContentContainer = styled.View`
    flex: 1;
    justify-content: center;
`;

const StyledInput = styled(Input).attrs((props) => ({
    containerStyle: {
        height: 48,
        width: 270,
        borderColor: props.error ? COLORS.RED : COLORS.STROKE,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: COLORS.WHITE
    },
    inputStyle: {
        fontSize: 14,
    },
    inputContainerStyle: {
        flex: 1,
        borderBottomWidth: 0,
    },
    labelStyle: {
        fontSize: 10,
        color: COLORS.SOFT_BLACK,
        fontWeight: 'normal',
    },
}))``;

const LoginButton = styled(Button).attrs({
    buttonStyle: {
        height: 48,
        width: 270,
        backgroundColor: COLORS.BLUE,
        borderRadius: 8,
    },
    disabledStyle: {
        backgroundColor: COLORS.BLUE_INACTIVE,
    },
    titleStyle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    disabledTitleStyle: {
        color: COLORS.WHITE,
    },
})``;

const ForgotButton = styled(Button).attrs({
    buttonStyle: {
        height: 52,
        width: 270,
        backgroundColor: COLORS.TRANSPARENT,
    },
    titleStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        lineHeight: 14,
        color: COLORS.SOFT_BLACK,
        textDecorationLine: 'underline',
    },
})``;

const Error = styled.Text`
    height: 24px;
    width: 270px;
    text-align: center;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    color: ${COLORS.RED};
    margin-bottom: 16px;
`;
