import * as types from '../constants/actionTypes';

const initialState = {
  fields: {
    'First Name': '',
    'Last Name': '',
    'Company': '',
    'Department': '',
    'Position': '',
    'Email': ''
  },
  getFetch: false,
  saveFetch: false
};

export default ( state = initialState, action = {
} ) => {
  switch ( action.type ) {
    case types.SAVE_FORM_INFO_FETCH:
      return {
        ...state,
        saveFetch: true
      };
    case types.SAVE_FORM_INFO_SUCCESS:
      return {
        ...state,
        saveFetch: false
      };
    case types.SAVE_FORM_INFO_ERROR:
      return {
        ...state,
        saveFetch: false
      };
    case types.GET_FORM_INFO_FETCH:
      return {
        ...state,
        getFetch: true
      };
    case types.GET_FORM_INFO_SUCCESS:
      return {
        ...state,
        getFetch: false,
        fields: {
          ...state.fields,
          ...action.payload
        }
      };
    case types.GET_FORM_INFO_ERROR:
      return {
        ...state,
        getFetch: false
      };
    default:
      return state;
  }
};
