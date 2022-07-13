import axios from "axios";
import { addProductCreator } from "../actionCreators/product";

export const addProducts = (shop: string): any => {
  return (dispatch: any) => {
    axios
      .get(`/api/products/${shop}`)
      .then(({ data }: any) => {
        dispatch(addProductCreator(data));
      })
      .catch((err) => console.log(err.message));
  };
};
