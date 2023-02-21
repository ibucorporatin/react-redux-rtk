import React from "react";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removeItem,
} from "../../redux/actions/productActions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={item.image}
          alt="product"
          className="img-fluid"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product:</span>
        {item.category}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price:</span>
        {item.price}$
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => dispatch(decrement(item.id))}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{item.count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => dispatch(increment(item.id))}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cart-icon"
          onClick={() => dispatch(removeItem(item.id))}
        >
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item totel :${item.total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
