import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrders } from "../../redux/thunk/addOrders";
import "./HistoryPage.scss";

export const HistoryPage = () => {
  const orders: any = useSelector((store: any) => store.ordersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addOrders());
  }, []);

  return (
    <div className="history-page">
      {orders.length > 0 ? (
        orders.map((item: any) => (
          <div className="order-wrapper">
            <div className="total-price-title">
              TOTAL_PRICE={item.totalPrice}
            </div>
            <div className="orders-items">
              {item.orders.map((item: any) => (
                <div className="item">
                  <div>{item.name}</div>
                  <img src={item.img} alt="" width="300px" height="200px" />
                  <div>Price is {item.price}$</div>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="history-message">History list is empty</div>
      )}
    </div>
  );
};
