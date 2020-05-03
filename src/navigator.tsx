import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from './screens/SignInScreen';
import { AppScreen } from './screens/AppScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { CalendarScreen } from './screens/CalendarScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { COLORS } from './constants';

export const LoggedOutNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={SignInScreen} />
        </Stack.Navigator>
    );
};

export const LoggedInNavigator = () => {
    const Tab = createMaterialBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Calendar"
            activeColor={COLORS.BLUE}
            inactiveColor={COLORS.DARK_BLUE}
            barStyle={{ backgroundColor: COLORS.WHITE }}>
            <Tab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                    tabBarLabel: 'Calendar',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="calendar-month-outline"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Email"
                component={AppScreen}
                options={{
                    tabBarLabel: 'Email',
                    tabBarIcon: ({ color }) => (
                        <Icon name="email-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={AppScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Icon name="account-multiple" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <Icon name="settings-outline" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
