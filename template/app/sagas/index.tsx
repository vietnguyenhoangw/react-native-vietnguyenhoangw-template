import {all, takeLatest} from 'redux-saga/effects';

// Types
import {ProductTypes} from '@/redux/product-redux';

// Sagas
import {getProductSaga} from '@/sagas/product-saga';

// Apis
import ProductAPI from '@/services/product-service';

// Api
const productApi = ProductAPI.create();

export default function* rootSaga() {
  // Products
  yield all([
    takeLatest(ProductTypes.GET_PRODUCT_REQUEST, getProductSaga, productApi),
  ]);
}
