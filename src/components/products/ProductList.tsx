"use client";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import ProductCard from "./productCard";
import { useEffect } from "react";
import { fetchAllProducts } from "@/redux/features/product-slice";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useAppSelector((state) => state.productReducer.value.productDetails);
  const status = useAppSelector((state) => state.productReducer.value.status);
  console.log(status,"checking status outside");
  useEffect(() => {
    console.log("use effect");
    console.log(status);
    if (status == "idle") {
      console.log("dispatching");
      dispatch(fetchAllProducts());
    }
  }, []);

  return (
    <>
      <h1>Product List Component</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading product</p>}
      {status === "succeeded" && (
        <>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </>
      )}
    </>
  );
}
