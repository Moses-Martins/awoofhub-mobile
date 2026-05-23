import type { NavigatorScreenParams } from '@react-navigation/native';
import navigationNames from './navigationNames';

export type MainTabParamList = {
  [navigationNames.homeTab]: undefined;
  [navigationNames.messageTab]: undefined;
  [navigationNames.notificationTab]: undefined;
  [navigationNames.wishlistTab]: undefined;
};

export type RootStackParamList = {
  [navigationNames.rootScreen]: NavigatorScreenParams<MainTabParamList>; 
  [navigationNames.rootAuthScreen]: NavigatorScreenParams<AuthStackParamList>;
  [navigationNames.offerScreen]: { offerId: string }; 
};

export type AuthStackParamList = {
  [navigationNames.loginScreen]: undefined;
  [navigationNames.signUpScreen]: undefined;
};