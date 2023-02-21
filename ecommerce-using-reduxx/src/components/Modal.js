import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { closeM } from "../redux/actions/productAction1";
import { ButtonContainer } from "./Navbar";

const Modal = () => {
  const { modelOpen, modalProduct } = useSelector((state) => state.model);
  const dispatch = useDispatch();

  if (!modelOpen) {
    return null;
  } else {
    const { image, category, price } = modalProduct;
    return (
      <ModelContainer>
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
            >
              <h5>item added to the cart</h5>
              <img className="img-fluid" alt="product" src={image} />
              <h5>{category}</h5>
              <h5 className="text-muted">price :${price}</h5>
              <Link to="/">
                <ButtonContainer onClick={() => dispatch(closeM())}>
                  Store
                </ButtonContainer>
              </Link>
              <Link to="/cart">
                <ButtonContainer cart onClick={() => dispatch(closeM())}>
                  go to cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </ModelContainer>
    );
  }
};
const ModelContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background-color: var(--mainWhite) !important;
  }
`;
export default Modal;
