import React, {useRef, useState, memo} from 'react';

// Styles
import styles from './styles';

// Components
import {
  CText,
  CView,
  CButton,
  CBaseView,
  CAlertModal,
  CMediaSlider,
  CScreenHeader,
} from '@/components';
import {useDispatch} from 'react-redux';
import {ProductActions} from '@/redux';

const HomeScreen = memo(() => {
  const dispatch = useDispatch();
  const alertRef = useRef<any>(null);

  const onOpenModal = () => {
    alertRef.current.onShow();
  };

  return (
    <CBaseView>
      <CScreenHeader title={'Home screen'} isTitleAlignLeft />
      <CView flex={1}>
        <CText text={'Hello World'} align={'center'} />
        <CView m20>
          <CButton
            btnTitle={'Press this button'}
            onPress={() => {
              dispatch(ProductActions.getProductRequest());
            }}
          />
        </CView>
        <CView m20>
          <CButton btnTitle={'Open alert modal'} onPress={onOpenModal} />
        </CView>
        <CMediaSlider data={undefined} />
      </CView>

      <CAlertModal ref={alertRef}>
        {/* Can remove children here */}
        <CView>
          <CText
            style={styles.linkText}
            text={'Click here to open alert modal'}
          />
        </CView>
        {/* ========================== */}
      </CAlertModal>

      <CView col m8 p8 fillWidth center>
        <CView row center>
          <CView mR8>
            <CText h2 bold text={'daniel'} />
          </CView>
          <CView mL8>
            <CText h2 text={'daniel'} />
          </CView>
        </CView>
      </CView>

      <CView>
        <CText text={'daniel'} />
      </CView>
    </CBaseView>
  );
});

export default HomeScreen;
