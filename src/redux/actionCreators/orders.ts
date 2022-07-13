import { ADD_ORDERS } from "../actionTypes/orders"

export const addOrdersCreator = (orders:any)=>{
    return{
        type:ADD_ORDERS,
        payload:orders
    }
}