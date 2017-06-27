import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { createItem, updateItem } from './items';
import { loginUser } from './users';
import * as actions from '../actions';

export default function* sagas() {
  yield [
    fork(takeLatest, actions.EMPLOYEE_CREATE_REQ, createItem),
    fork(takeLatest, actions.EMPLOYEE_CREATE_RES, createItem),
    fork(takeLatest, actions.EMPLOYEE_UPDATE_REQ, updateItem),
    fork(takeLatest, actions.EMPLOYEE_UPDATE_RES, updateItem),
    fork(takeLatest, actions.USER_CREATE_REQ, loginUser),
  ];
}
