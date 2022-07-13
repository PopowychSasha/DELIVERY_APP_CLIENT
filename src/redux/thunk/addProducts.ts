import axios from "axios";
import { addProductCreator } from "../actionCreators/product";

export const addProducts = (shop: string): any => {
  return (dispatch: any) => {
    axios
      .get(`https://deliveryappservertest.herokuapp.com/api/products/${shop}`)
      .then(({ data }: any) => {
        dispatch(addProductCreator(data));
      })
      .catch((err) => console.log(err.message));
  };
};
