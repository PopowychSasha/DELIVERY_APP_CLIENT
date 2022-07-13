import axios from "axios";
import { IShop } from "../../types/IShop";
import { addShopsCreator } from "../actionCreators/shop";

export const addShops = (): any => {
  return (dispatch: any) => {
    axios
      .get<IShop[]>("https://deliveryappservertest.herokuapp.com/api/shops")
      .then(({ data }) => dispatch(addShopsCreator(data)))
      .catch((err) => console.log(err.message));
  };
};
