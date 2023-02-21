import React, { useState } from "react";
import { useSelector } from "react-redux";
import { storeProducts } from "../data";
import { ProductConsumer } from "./context";
import Product from "./Product";
import Title from "./Title";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
