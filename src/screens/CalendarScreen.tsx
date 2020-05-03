import * as React from 'react';
import { CalendarList } from 'react-native-calendars';
import { HeaderRootContainer } from '../components/HeaderRootContainer';

export const CalendarScreen = () => {
    return (
        <HeaderRootContainer
            screenTitle="Calendrier"
            leftIconName="menu"
            rightIconName="calendar-check-outline">
            <CalendarList
                onVisibleMonthsChange={(months) => {
                    console.log('now these months are visible', months);
                }}
            />
        </HeaderRootContainer>
    );
};
