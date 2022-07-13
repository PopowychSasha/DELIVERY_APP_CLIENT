import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { IProduct } from "../../../../types/IProduct";
import "react-toastify/dist/ReactToastify.css";
import "./Products.scss";

interface IProductsSelector {
  productReducer: IProduct[];
}
export const Products = () => {
  const products: any = useSelector<IProductsSelector>(
    (store) => store.productReducer
  );

  const addProductToSessionStorage = (id: string, name: string) => {
    let product: number = Number(sessionStorage.getItem(id));
    if (product) {
      product++;
      sessionStorage.setItem(id, product.toString());
    } else {
      sessionStorage.setItem(id, "1");
    }
    toast("You add product to cart successfully");
  };

  return (
    <div className="products-wrapper">
      {products.map((item: IProduct) => (
        <div className="product-item" key={item._id}>
          <img src={item.img} alt="" />
          <div style={{ display: "flex" }}>
            <div>
              <div className="product-name">{item.name}</div>
              <div className="product-price">PRICE {item.price}$</div>
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() => addProductToSessionStorage(item._id, item.name)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
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
