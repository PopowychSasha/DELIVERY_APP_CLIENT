import axios from "axios";
import { addOrdersCreator } from "../actionCreators/orders";
export const addOrders = (): any => {
  return (dispatch: any) => {
    axios
      .get("/api/orders")
      .then(({ data }) => dispatch(addOrdersCreator(data)))
      .catch((err) => console.log(err.message));
  };
};
