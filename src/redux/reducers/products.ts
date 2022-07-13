import { IProduct } from "../../types/IProduct";
import { ADD_PRODUCT } from "../actionTypes/product";

const initialState : IProduct[] = [];

interface IAction {
    type:string,
    payload:IProduct[]
}

export const productReducer = (state = initialState,action:IAction)=>{
    if(action.type===ADD_PRODUCT){
        return [...action.payload]
    }
    return state;
}