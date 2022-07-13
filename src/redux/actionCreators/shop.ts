import { IShop } from "../../types/IShop"
import { ADD_SHOPS } from "../actionTypes/shop"

export const addShopsCreator = (data:IShop[])=>{
    return {
        type:ADD_SHOPS,
        payload:data
    }
}