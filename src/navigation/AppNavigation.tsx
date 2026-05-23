import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OfferScreen from '../screens/offer/OfferScreen';
import AuthNavigation from './AuthNavigation';
import HomeTabNavigation from './HomeTabNavigator';
import navigationNames from './navigationNames';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function AppNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={navigationNames.rootScreen} component={HomeTabNavigation} options={{ headerShown: false }} />
                <Stack.Screen name={navigationNames.rootAuthScreen} component={AuthNavigation} options={{ headerTitle: 'Log In' }} />
                <Stack.Screen name={navigationNames.offerScreen} component={OfferScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


