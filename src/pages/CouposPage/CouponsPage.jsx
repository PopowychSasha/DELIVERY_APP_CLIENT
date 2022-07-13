import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  addCouponCreator,
  removeCouponCreator,
} from "../../redux/actionCreators/coupon";
import "./CouponsPage.scss";

export const CouponsPage = () => {
  const [coupons, setCoupons] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const countOfCoupons = Math.floor(Math.random() * 5 + 5);
    const coupons = [];

    for (let i = 0; i < countOfCoupons; i++) {
      coupons.push(uuidv4());
    }
    setCoupons([...coupons]);
  }, []);

  const checkCouponHandler = () => {
    const firstRandomNumber = Math.floor(Math.random() * 2);
    const secondRandomNumber = Math.floor(Math.random() * 2);
    if (+firstRandomNumber === +secondRandomNumber) {
      const discount = Math.floor(Math.random() * 80 + 10);
      alert(`Discount=${discount}`);
      dispatch(addCouponCreator(discount));
      navigate("/cart");
    } else {
      alert(`This coupon is expired(((`);
      dispatch(removeCouponCreator());
    }
  };

  return (
    <div className="coupon-page">
      {coupons.map((coupon) => (
        <div className="coupon-item">
          <div className="coupon-name">{coupon}</div>
          <button className="coupon-btn" onClick={checkCouponHandler}>
            Check coupon
          </button>
        </div>
      ))}
    </div>
  );
};
