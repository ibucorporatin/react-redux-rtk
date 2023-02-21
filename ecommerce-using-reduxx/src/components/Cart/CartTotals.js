import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/actions/productAction1";
import { clearCartRelatedData } from "../../redux/actions/productActions";

const CartTotals = () => {
  const dispatch = useDispatch();
  const { cartSubTotal, cartTax, cartTotal } = useSelector(
    (state) => state.total
  );
  return (
    <>
      <div className="container d-flex alightn-item-center justify-content-center">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                onClick={() => dispatch(clearCartRelatedData())}
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal:</span>
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax:</span>
              <strong>${cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">subtotal:</span>
              <strong>${cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotals;
