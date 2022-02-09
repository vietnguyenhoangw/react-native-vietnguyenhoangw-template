import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screenTracking} from './navigation-action';

// ref
import {navigationRef} from './app-navigator';

// Screens
import {HomeScreen, DetailScreen} from '../containers';

// Components
import {CBottomTabs} from '@/components/bottom-tabs';
import {AppStateTypes} from '@/redux/app-redux';
import {useSelector} from 'react-redux';

// Screen options
const SCREEN_OPTIONS = {
  headerShown: false,
};

// Home Tabs
const HomeTab = createBottomTabNavigator();
function HomeTabMembers() {
  return (
    <HomeTab.Navigator
      screenOptions={SCREEN_OPTIONS}
      backBehavior={'none'}
      tabBar={props => <CBottomTabs {...props} />}>
      <HomeTab.Screen name="HomeScreen" component={HomeScreen} />
    </HomeTab.Navigator>
  );
}

// App Stack
const AppStack = createStackNavigator();
function AppNavigation() {
  const appState: AppStateTypes = useSelector((state: any) => state.app);

  return (
    <NavigationContainer ref={navigationRef} onStateChange={screenTracking}>
      <AppStack.Navigator
        screenOptions={SCREEN_OPTIONS}
        initialRouteName={'HomeScreen'}>
        <AppStack.Screen name={'HomeTabMembers'} component={HomeTabMembers} />
        <AppStack.Screen name={'DetailScreen'} component={DetailScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export {AppNavigation};
