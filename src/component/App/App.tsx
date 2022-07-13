import { Route, Routes } from "react-router-dom";
import { CouponsPage } from "../../pages/CouposPage/CouponsPage";
import { HistoryPage } from "../../pages/HistoryPage/HistoryPage";
import { ShoppingCartPage } from "../../pages/ShoppingCartPage/ShoppingCartPage";
import { ShopsPage } from "../../pages/ShopsPage/ShopsPage";
import { Header } from "../../shared/Header/Header";
import "./App.scss";

export const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<ShopsPage/>} />
        <Route path="/cart" element={<ShoppingCartPage/>} />
        <Route path="/history" element={<HistoryPage/>} />
        <Route path="/coupons" element={<CouponsPage/>}/>
      </Routes>
    </div>
  );
};
