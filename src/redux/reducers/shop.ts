import { IShop } from "../../types/IShop";
import { ADD_SHOPS } from "../actionTypes/shop";


const initialState:[] = [];

interface IAction {
    type:string,
    payload:IShop[]
}

export const shopReducer = (state=initialState,action : IAction)=>{
    if(action.type === ADD_SHOPS){
        return [...action.payload];
    }
    return state;
}