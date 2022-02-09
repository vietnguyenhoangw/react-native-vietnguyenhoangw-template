/**
 * Take on the role of a transparent screen
 *
 * This root-container is the base of all screen
 * we using this one for handle something behind
 *
 */
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

// Components
import {CModal} from '@/components';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import {AppActions} from '@/redux';

function RootContainer() {
  const dispatch = useDispatch();
  const appState = useSelector((state: any) => state.app);
  const {appError} = appState || {};

  const [errorModalOption, setErrorModalOption] = useState<any>({
    isShow: false,
    message: null,
  });

  useEffect(() => {
    if (!isEmpty(appState.appError)) {
      setErrorModalOption({
        isShow: true,
        message: appState.appError,
      });
    }
  }, [appError]);

  const onHideModal = (): void => {
    dispatch(AppActions.setAppError(null));
    setErrorModalOption({
      isShow: false,
      message: null,
    });
  };

  return (
    <>
      <CModal
        onSwipeComplete={onHideModal}
        isModalVisible={errorModalOption?.isShow}
      />
    </>
  );
}

export default RootContainer;

const styles = StyleSheet.create({
  container: {
    zIndex: -10000,
    flex: 1,
  },
});
