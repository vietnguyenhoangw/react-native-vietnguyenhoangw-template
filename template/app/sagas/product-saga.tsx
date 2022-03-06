import {call, put} from 'redux-saga/effects';

// Functions
import {useNetworkActivityStatusBar} from '@/utils';

// Redux
import {AppActions, ProductActions} from '@/redux';
import store from '@/redux/create-store';

export function* getProductSaga(api: any, action: any): any {
  try {
    useNetworkActivityStatusBar();
    const response = yield call(api.getProductApi);
    useNetworkActivityStatusBar();
    if (response.ok && response.status === 200) {
      if (response.data.rc === 0) {
        yield put(ProductActions.getProductSuccess());
      } else {
        yield put(ProductActions.getProductFailure());
      }
    } else {
      yield put(ProductActions.getProductFailure());
      yield put(AppActions.setAppError('Hello world'));
    }
  } catch (error) {
    yield put(ProductActions.getProductFailure(error));
  }
}
