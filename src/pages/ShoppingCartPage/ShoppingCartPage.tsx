import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types/IProduct";
import axios from "axios";
import "./ShoppingCartPage.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface IProductsSelector {
  productReducer: IProduct[];
}

export const ShoppingCartPage = () => {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const orderedProductKey: string[] = Object.keys(sessionStorage);
  const navigate = useNavigate();
  const products: any = useSelector<IProductsSelector>(
    (store) => store.productReducer
  );

  const discountData: any = useSelector<any>((store) => store.couponReducer);

  useEffect(() => {
    if (products.length === 0) {
      navigate("/");
    }
  }, [products]);

  const totalPrice: any = useSelector<IProductsSelector>((store) => {
    let price: number = 0;
    store.productReducer.forEach((item) => {
      if (orderedProductKey.includes(item._id)) {
        price += Number(item.price) * Number(sessionStorage.getItem(item._id));
      }
    });
    return price;
  });

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (address === "" || email === "" || phone === "" || name === "") {
      toast("Data not filled");
    } else {
      let totalProductPrice = discountData.status
        ? Math.floor(+totalPrice * (discountData.discount / 100))
        : totalPrice;

      const orderProducts = products.filter((item: any) =>
        orderedProductKey.includes(item._id)
      );
      if (orderProducts.length === 0) {
        toast("Order list is empty");
        return;
      }
      axios
        .post("https://deliveryappservertest.herokuapp.com/api/create/order", {
          address,
          email,
          phone,
          name,
          orderProducts,
          totalProductPrice,
        })
        .then(({ data }) => {
          sessionStorage.clear();
          navigate("/history");
        })
        .catch((err) => console.log(err.message));
    }
  };

  const filteredProducts = products.filter((item: any) =>
    orderedProductKey.includes(item._id)
  );
  return (
    <div className="shopping-cart-page">
      <form className="cart-form" onSubmit={onSubmitHandler}>
        <input
          className="form-input"
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="form-input"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input"
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="form-input"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input className="submit-form" type="submit" value="Submit" />
        {discountData.status ? (
          <div className="price-title">
            With coupon=
            {Math.floor(+totalPrice * (discountData.discount / 100))}
          </div>
        ) : (
          <div className="price-title">TotalPrice={totalPrice}$</div>
        )}
      </form>
      <div className="cart-items-wrapper">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item: any) => (
            <div className="cart-item">
              <div>{item.name}</div>
              <div>
                <img src={item.img} alt="" width="300px" height="200px" />
              </div>
              <div className="price-title">Price is {item.price}$</div>
              <div className="count-title">
                Count is {sessionStorage.getItem(item._id)}
              </div>
            </div>
          ))
        ) : (
          <div className="cart-list-message">Cart item list is empty</div>
        )}
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
