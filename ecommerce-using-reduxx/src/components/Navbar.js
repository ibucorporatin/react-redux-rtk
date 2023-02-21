import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import phoneLogo from "../logo.svg";

const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary ">
      <Link to={"/"}>
        <img className="navbar-brand" src={phoneLogo} alt="" />
      </Link>

      <ul className="navbar-nav align-item-center">
        <li className="nav-item ml-5">
          <Link className="nav-link" to={"/"}>
            Product
          </Link>
        </li>
      </ul>

      <Link to={"/cart"} className="ml-auto">
        <ButtonContainer>
          <span className="me-2">
            <i className="fa-solid fa-cart-plus"></i>
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 15px;
  background: transparent;
  border: 1px solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 5%5%;
  padding: 5px 10px;
  cursor: pointer;
  margin: 5px 10px 5px 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
const NavWrapper = styled.div`
  background-color: var(--mainBlue) !important ;
  .nav-link {
    color: var(--mainWhite) !important ;
    font-size: 25px;
    text-transform: capitalize;
  }
  height: 50px;
`;
export default Navbar;
