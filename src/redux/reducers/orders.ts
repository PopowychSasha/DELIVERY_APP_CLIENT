import { ADD_ORDERS } from "../actionTypes/orders";

const initialState: any = [];

export const ordersReducer = (state = initialState, action: any) => {
  if (action.type === ADD_ORDERS) {
    console.log('ADDDDDDDD)))))))');
    return [...action.payload];
  }
  return state;
};
