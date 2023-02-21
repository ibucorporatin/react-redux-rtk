import React from "react";
import { useSelector } from "react-redux";
import { ProductConsumer } from "../context";
import CartItem from "./CartItem";

const CartList = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CartList;
