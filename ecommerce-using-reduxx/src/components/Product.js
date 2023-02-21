import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  addToCart,
  setModel,
  setSingleProduct,
} from "../redux/actions/productActions";

const Product = ({ product }) => {
  const { id, category, image, price, inCart } = product;
  const dispatch = useDispatch();

  const cartHandler = (e) => {
    e.stopPropagation();
    dispatch(addToCart(id));
    dispatch(setModel(id));
  };

  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div
          className="img-container p-5"
          onClick={() => dispatch(setSingleProduct(id))}
        >
          <Link to="/details">
            <img src={image} alt="product" className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={(e) => cartHandler(e)}
          >
            {inCart ? (
              <p className="text-capitalie mb-0" disabled>
                in cart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{category}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="me-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 1.5ps solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
    width: 130px;
    height: 140px;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0px;
    background-color: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 25px;
    border-radius: 20px 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
`;
export default Product;
