import HomeScreen from '@/screens/home/HomeScreen';
import MessageScreen from '@/screens/message/MessageScreen';
import NotificationScreen from '@/screens/notification/NotificationScreen';
import WishlistScreen from '@/screens/wishlist/WishlistScreen';
import { colors } from '@/styles/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { tabScreenOptions } from './NavigationHelper';
import navigationNames from './navigationNames';
import { MainTabParamList } from './types';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<MainTabParamList>();


function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationNames.homeScreen}
        component={HomeScreen}
        options={{ title: 'Dress' }}
      />
    </Stack.Navigator>
  );
};


function MessageStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationNames.messageScreen}
        component={MessageScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

function WishlistStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationNames.wishlistScreen}
        component={WishlistScreen}
      />
    </Stack.Navigator>
  );
};

function NotificationStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationNames.notificationScreen}
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
};


export default function HomeTabNavigation() {

    return (
        <Tab.Navigator screenOptions={({ route, navigation }) => ({...tabScreenOptions({ route, navigation }), tabBarActiveTintColor: colors.primary, tabBarInactiveTintColor: colors.gray })}>
            <Tab.Screen name={navigationNames.homeTab} component={HomeStackScreen} />
            <Tab.Screen name={navigationNames.messageTab} component={MessageStackScreen} />
            <Tab.Screen name={navigationNames.notificationTab} component={NotificationStackScreen} />
            <Tab.Screen name={navigationNames.wishlistTab} component={WishlistStackScreen} />
        </Tab.Navigator>
    );
};
