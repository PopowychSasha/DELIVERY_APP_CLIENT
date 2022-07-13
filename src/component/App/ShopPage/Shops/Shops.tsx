import { useDispatch, useSelector } from "react-redux";
import { IShopSelector } from "../../../../types/IShopSelector";
import { addProducts } from "../../../../redux/thunk/addProducts";
import "./Shops.scss";
import { useEffect, useState } from "react";

export const Shops = () => {
  const dispatch = useDispatch();
  const [isCurrentShopAssign, setIsCurrentShopAssign] =
    useState<boolean>(false);
  const [currentShop, setCurrentShop] = useState<string>("");
  const shops: any = useSelector<IShopSelector>((store) => store.shopReducer);

  if (shops.length > 0 && !isCurrentShopAssign) {
    setCurrentShop(shops[0].name);
    setIsCurrentShopAssign(true);
  }

  useEffect(() => {
    if (shops.length > 0) {
      dispatch(addProducts(shops[0].name));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shops]);

  const loadProductsFromOtherShop = (name: string) => {
    if (Object.keys(sessionStorage).length > 0 && currentShop !== name) {
      // eslint-disable-next-line no-restricted-globals
      const answer = confirm(
        "При переході до інакшого магазину замовленні дані будуть стерті"
      );
      if (answer === true) {
        sessionStorage.clear();
        setCurrentShop(name);
        dispatch(addProducts(name));
      }
    } else if (
      Object.keys(sessionStorage).length === 0 &&
      currentShop !== name
    ) {
      setCurrentShop(name);
      dispatch(addProducts(name));
    }
  };
  return (
    <div className="shops-wrapper">
      <div className="shops-title">Shops</div>
      {shops.map((item: any) => (
        <div
          key={item.id}
          onClick={() => loadProductsFromOtherShop(item.name)}
          className="shops-item"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};
