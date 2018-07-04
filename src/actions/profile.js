import * as types from '../constants/actionTypes';
import api from '../utils/api';

export const saveFormInfo = data => {
  return dispatch => {
    dispatch({
      type: types.SAVE_FORM_INFO_FETCH
    });

    api('setDocData', { ...data }).then(() => {
      dispatch({
        type: types.SAVE_FORM_INFO_SUCCESS
      });
    }).catch(err => {
      dispatch({
        type: types.SAVE_FORM_INFO_ERROR
      });
    })
  }
}

export const getFormInfo = () => {
  return dispatch => {
    dispatch({
      type: types.GET_FORM_INFO_FETCH
    });

    api('getDocData').then(doc => {
      dispatch({
        type: types.GET_FORM_INFO_SUCCESS,
        payload: doc.data()
      });
    }).catch(err => {
      dispatch({
        type: types.GET_FORM_INFO_ERROR
      });
    })
  }
}
