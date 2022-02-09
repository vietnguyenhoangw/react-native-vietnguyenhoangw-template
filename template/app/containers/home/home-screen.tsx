import React, {createRef, useRef, useState} from 'react';

// Styles
import styles from './styles';

// Components
import {
  CBaseView,
  CButton,
  CMediaSlider,
  CScreenHeader,
  CText,
  CView,
} from '@/components';
import {useDispatch} from 'react-redux';
import {ProductActions} from '@/redux';

function HomeScreen({}) {
  const dispatch = useDispatch();

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
        <CMediaSlider data={undefined} />
      </CView>

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
}

export default HomeScreen;
