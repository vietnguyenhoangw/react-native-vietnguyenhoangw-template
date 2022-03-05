import React, {useState, memo, forwardRef, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

// Themes
import {Metrics, Images} from '@/theme';

// // Models
import {CAlertModalType} from '@/models';

// Components
import {CText, CImage} from '@/components';

const CAlertModal = memo(
  forwardRef((props: CAlertModalType, ref) => {
    const {children} = props;

    //States
    const [isShowAlert, setShowAlert] = useState<boolean>(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        onCloseModal();
      }, 3000);
      return () => clearTimeout(timeout);
    }, [isShowAlert]);

    // handle function for outside call
    React.useImperativeHandle(
      ref,
      () => ({
        onShow: () => onOpenModal(),
      }),
      [],
    );

    const onOpenModal = () => {
      setShowAlert(true);
    };

    const onCloseModal = () => {
      setShowAlert(false);
    };

    return (
      <>
        <TouchableOpacity onPress={onOpenModal}>{children}</TouchableOpacity>
        <Modal
          isVisible={isShowAlert}
          style={styles.modal}
          statusBarTranslucent
          propagateSwipe={true}
          backdropOpacity={0}
          animationIn="fadeIn"
          animationOut="fadeOut"
          deviceHeight={Metrics.screenHeight + 80} // Fix spacing bottom some device
        >
          <SafeAreaView>
            <View style={[styles.container]}>
              <CImage source={Images.CircleSuccess} styles={styles.icStyle} />
              <CText style={styles.textStyle} text={'Hello world!!!'} />
            </View>
          </SafeAreaView>
        </Modal>
      </>
    );
  }),
);
const styles = StyleSheet.create({
  modal: {
    flexGrow: 1,
    margin: 0,
  },
  container: {
    opacity: 0.7,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: Metrics.screenWidth * 0.6,
  },
  textStyle: {
    marginTop: 16,
    alignSelf: 'center',
    color: 'white',
  },
  icStyle: {
    height: 24,
    width: 24,
  },
});

export default CAlertModal;
