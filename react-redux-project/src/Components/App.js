import React from 'react'
import Header from './Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from './ProductListing'
import ProductDetails from './ProductDetails'
import "./app.css"
import CartPage from './CartPage';

export default function App() {
  return (
    <div>
     
          <BrowserRouter>
          <Header/>
              <Routes>
                <Route >
                  <Route path="/"  element={<ProductListing/>} />
                  <Route path="/cart"  element={<CartPage/>} />
                  <Route  path="/product/:productid" element={<ProductDetails/>} />
                  <Route>404  not found</Route>
               
                </Route>
              </Routes>
            
            </BrowserRouter>

    </div>
  );
}


