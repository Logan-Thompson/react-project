import * as actions from '../actions';

export default function items(state = [], action) {
  switch (action.type) {
    case actions.EMPLOYEE_CREATE_REQ:
      return [...state, action.item];
    default:
      return state;
  }
}
