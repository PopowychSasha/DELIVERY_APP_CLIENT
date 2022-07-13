import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Products } from "../../component/App/ShopPage/Products/Products";
import { Shops } from "../../component/App/ShopPage/Shops/Shops";
import { addShops } from "../../redux/thunk/addShops";
import { Header } from "../../shared/Header/Header";
import "./ShopsPage.scss";

export const ShopsPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addShops());
  }, []);
  return (
    <div className="shops-page">
      <main className="shops-page-main">
        <Shops />
        <Products />
      </main>
    </div>
  );
};
