import { Ionicons } from '@expo/vector-icons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import React, { ComponentProps } from 'react';

import navigationNames from './navigationNames';

const getTabTitle = (routeName: string): string => {
    switch (routeName) {
        case navigationNames.homeTab:
            return 'Home';
        case navigationNames.messageTab:
            return 'Message';
        case navigationNames.notificationTab:
            return 'Notification';
        case navigationNames.wishlistTab:
            return 'Wishlist';
        default:
            return '';
    }
};

export const tabScreenOptions: (props: {
    route: RouteProp<ParamListBase, keyof ParamListBase>;
    navigation: any;
}) => BottomTabNavigationOptions = ({ route }) => ({
    title: getTabTitle(route.name),
    tabBarIcon: ({ color, size }) => {
        
        let iconName: ComponentProps<typeof Ionicons>['name'];
        switch (route.name) {
            case navigationNames.homeTab:
                iconName = 'home';
                break;
            case navigationNames.messageTab:
                iconName = 'chatbubble-ellipses-sharp';
                break;
            case navigationNames.notificationTab:
                iconName = 'notifications';
                break;
            case navigationNames.wishlistTab:
                iconName = 'heart';
                break;
            default:
                iconName = 'alert-circle';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
    },
});