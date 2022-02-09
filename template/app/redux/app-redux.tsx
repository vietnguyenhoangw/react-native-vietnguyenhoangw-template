import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  changeI18nCode: ['code'],

  setAppError: ['errorMessage'],
});

export const AppTypes = Types;
export default Creators;

export interface AppStateTypes {
  i18nCode: string | null;
  appError: string | null;

  merge: (params: object) => any;
}

/* ------------- Initial State ------------- */
export const INITIAL_STATE: AppStateTypes = Immutable({
  i18nCode: null,
  appError: null,
});

/* ------------- Reducers ------------- */
export const changeI18nCode = (state: AppStateTypes, {code}: any) => {
  return state.merge({i18nCode: code});
};
export const setAppError = (state: AppStateTypes, {errorMessage}: any) => {
  return state.merge({appError: errorMessage});
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_I18N_CODE]: changeI18nCode,

  [Types.SET_APP_ERROR]: setAppError,
});
