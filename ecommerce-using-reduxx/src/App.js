import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addTotals, fetchProducts } from "./redux/actions/productActions";
import Test from "./components/Test";

const App = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTotals());
  }, [cart]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Modal />
      {/* <Test/> */}
    </>
  );
};

export default App;
