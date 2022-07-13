import { IProduct } from "../../types/IProduct"
import { ADD_PRODUCT } from "../actionTypes/product"

export const addProductCreator = (data:IProduct[])=>{
    return {
        type:ADD_PRODUCT,
        payload:data
    }
}