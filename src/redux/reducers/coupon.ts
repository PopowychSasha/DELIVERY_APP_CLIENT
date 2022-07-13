import { ADD_COUPON, REMOVE_COUPON } from "../actionTypes/coupon";

const initialState = {
    status:false,
    discount:0
};

export const couponReducer = (state = initialState,action : any)=>{
    if(action.type === ADD_COUPON){
        return {
            status:true,
            discount:action.discount
        };
    }
    else if(action.type === REMOVE_COUPON){
        return {
            status:false,
            discount:0
        };
    }
    return state;
}