/**
 *
 *
 *
 *
 * Welcome to first entry point of the app.
 * This is the root component of our app, where we config
 * base of app Statusbar, redux's provider, root screen.
 *
 */
import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Config from 'react-native-config';

// Redux
import {Provider} from 'react-redux';
import store from '../redux/create-store';

// Screens
import RootContainer from './root-container';

// Navigation
import {AppNavigation} from '@/navigation/app-navigation';

// Components
import {CText} from '@/components';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const CustomStatusBar = ({backgroundColor, ...props}: any) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const BuildStagingFlag = (): any => {
  return Config.BASE_URL === Config.STAGING_URL ? (
    <CText text={'staging_dev_mode(0)'} style={styles.stagingText} />
  ) : null;
};

const App: () => any = () => {
  return (
    <Provider store={store}>
      <CustomStatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={styles.container}>
        <AppNavigation />
        <RootContainer />
        <BuildStagingFlag />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  stagingText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    color: 'red',
  },
});

export default App;
