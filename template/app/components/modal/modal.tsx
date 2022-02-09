/***
 *
 *
 *
 * CUSTOM MODAL
 *
 * *** FEATURE AND USED:
 *
 * *** LOGIC NOTICED:
 *
 */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';

// Styles
import styles from './styles';

// Models
import {CModalType} from '@/models';

const CModal: React.FC<CModalType> = (props: any) => {
  return (
    props.isModalVisible && (
      <Modal
        isVisible={props.isModalVisible}
        style={styles.modal}
        statusBarTranslucent
        propagateSwipe={true}
        backdropOpacity={0.5}
        swipeDirection="down"
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onSwipeComplete={props.onSwipeComplete}
        onBackdropPress={props.onSwipeComplete}>
        <SafeAreaView style={{backgroundColor: 'white'}}>
          <View style={[styles.container, props.modalContainerStyle]}>
            {props.renderContent}
          </View>
        </SafeAreaView>
      </Modal>
    )
  );
};

export default CModal;
