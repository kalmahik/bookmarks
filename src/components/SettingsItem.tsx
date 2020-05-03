import * as React from 'react';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants';
export const SettingsItemComponent = ({
    title,
    titleSize = 14,
    iconName,
    iconSize = 20,
    iconColor = COLORS.DARK_BLUE,
    onPress,
}) => {
    return (
        <ListItem
            key={title}
            title={title}
            leftIcon={
                <Icon name={iconName} color={iconColor} size={iconSize} />
            }
            containerStyle={{ width: '100%' }}
            titleStyle={{ fontSize: titleSize }}
            onPress={onPress}
        />
    );
};
