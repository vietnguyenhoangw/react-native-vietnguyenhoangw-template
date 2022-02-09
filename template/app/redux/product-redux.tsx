import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  getProductRequest: [''],
  getProductSuccess: ['getProductRp'],
  getProductFailure: ['getProductErr'],
});

export const ProductTypes = Types;
export default Creators;

export interface ProductStateTypes {
  products: object;
  isFetchingGetProducts: boolean;
  errorGetProducts: null | string;

  merge: (params: object) => any;
}

/* ------------- Initial State ------------- */
export const INITIAL_STATE: ProductStateTypes = Immutable({
  products: [],
  isFetchingGetProducts: false,
  errorGetProducts: null,
});

/* ------------- Reducers ------------- */
export const getProductRequest = (state: ProductStateTypes) => {
  return state.merge({
    isFetchingGetProducts: true,
  });
};
export const getProductSuccess = (
  state: ProductStateTypes,
  {getProductRp}: any,
) => {
  return state.merge({
    isFetchingGetProducts: false,
    products: getProductRp,
  });
};
export const getProductFailure = (
  state: ProductStateTypes,
  {getProductErr}: any,
) => {
  return state.merge({
    isFetchingGetProducts: false,
    errorGetProducts: getProductErr,
  });
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PRODUCT_REQUEST]: getProductRequest,
  [Types.GET_PRODUCT_SUCCESS]: getProductSuccess,
  [Types.GET_PRODUCT_FAILURE]: getProductFailure,
});
