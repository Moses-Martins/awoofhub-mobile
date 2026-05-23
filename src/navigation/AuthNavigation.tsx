import LoginScreen from '@/screens/auth/LoginScreen';
import SignUpScreen from '@/screens/auth/SignUpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationNames from './navigationNames';
import { AuthStackParamList } from './types';

const RootStack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigation() {

    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name={navigationNames.loginScreen}
                component={LoginScreen}
                options={{ headerTitle: 'Log In' }}
            />
            <RootStack.Screen
                name={navigationNames.signUpScreen}
                component={SignUpScreen}
                options={{ headerTitle: 'Sign Up' }}
            />
        </RootStack.Navigator>
    );
};
