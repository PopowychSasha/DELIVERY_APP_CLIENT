import { ADD_COUPON, REMOVE_COUPON } from "../actionTypes/coupon"

export const addCouponCreator = (discountValue:number)=>{
    return {
        type:ADD_COUPON,
        discount:discountValue
    }
}

export const removeCouponCreator = ()=>{
    return {
        type:REMOVE_COUPON,
    }
}