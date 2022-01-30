import {AuthTypes} from '../types';

export const questionFetch = (data) => ({
    type: AuthTypes.QUESTION_REQUEST,
    payload: data,
  });
  export const questionError = () => ({
    type: AuthTypes.QUESTION_ERROR
  })