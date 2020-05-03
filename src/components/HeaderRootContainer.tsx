import React, { ReactNode } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { isIos } from '../utils/general';
import styled from 'styled-components';
import { Header } from 'react-native-elements';
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    children: ReactNode;
    screenTitle: string;
    rightIconName: string;
    leftIconName: string;
    backgroundColor: string;
}

export const HeaderRootContainer = ({
    children,
    screenTitle,
    rightIconName,
    leftIconName,
    backgroundColor = COLORS.STROKE,
}: Props) => {
    return (
        <KeyboardAvoidingStyled
            behavior={isIos ? 'padding' : 'height'}
            backgroundColor={backgroundColor}>
            <Header
                backgroundColor={COLORS.BLUE}
                leftComponent={
                    leftIconName && (
                        <Icon
                            name={leftIconName}
                            color={COLORS.WHITE}
                            size={26}
                        />
                    )
                }
                centerComponent={{
                    text: screenTitle,
                    style: {
                        color: COLORS.WHITE,
                        fontWeight: '600',
                        fontSize: 18,
                        lineHeight: 21,
                    },
                }}
                rightComponent={
                    leftIconName && (
                        <Icon
                            name={rightIconName}
                            color={COLORS.WHITE}
                            size={26}
                        />
                    )
                }
                statusBarProps={{ barStyle: 'light-content' }}
            />
            {children}
        </KeyboardAvoidingStyled>
    );
};

const KeyboardAvoidingStyled = styled(KeyboardAvoidingView)<TStyledView>`
    flex: 1;
    align-items: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

type TStyledView = {
    backgroundColor: string;
};
