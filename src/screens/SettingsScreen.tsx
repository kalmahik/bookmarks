import * as React from 'react';
import styled from 'styled-components';
import { HeaderRootContainer } from '../components/HeaderRootContainer';
import { connect } from 'react-redux';
import { selectUsername } from '../auth/reducer';
import { LOGOUT_FETCH_REQUESTED } from '../auth/saga';
import { SettingsItemComponent } from '../components/SettingsItem';
import { COLORS } from '../constants';

export const ParameterScreenContainer = ({ onLogout }) => {
    return (
        <HeaderRootContainer
            screenTitle="Paramètres"
            backgroundColor={COLORS.WHITE}>
            <UserContainer>
                <SettingsItemComponent
                    title="Bellaiche Arnold"
                    iconName="account-circle-outline"
                    iconSize={30}
                    titleSize={18}
                />
            </UserContainer>
            <SettingsItemComponent
                title="Gérer les ouvertures"
                iconName="apps"
            />
            <SettingsItemComponent
                title="Agendas"
                iconName="calendar-month-outline"
                iconColor={COLORS.ORANGE}
            />
            <SettingsItemComponent
                title="Aide"
                iconName="help-circle-outline"
            />
            <SettingsItemComponent
                title="Réglages"
                iconName="settings-outline"
            />
            <SettingsItemComponent
                title="Contacter le support"
                iconName="email-outline"
            />
            <SettingsItemComponent
                title="Se déconnecter"
                iconName="exit-to-app"
                iconColor={COLORS.TEXT_INACTIVE}
                onPress={onLogout}
            />
        </HeaderRootContainer>
    );
};

const mapStateToProps = (state) => ({
    usernameStored: selectUsername(state),
});

const mapDispatchToProps = (dispatch) => ({
    onLogout: () => {
        dispatch({
            type: LOGOUT_FETCH_REQUESTED,
        });
    },
});

export const SettingsScreen = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ParameterScreenContainer);

const UserContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 16px;
`;
