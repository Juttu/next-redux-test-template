"use client";
import { useEffect } from "react";
import { fetchProduct } from "@/redux/features/product-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useSearchParams } from "next/navigation";

export default function ProductCard() {
  const router = useSearchParams();
  const id = router.get("id");
  const dispatch = useDispatch<AppDispatch>();
  const productId = Number(id);
  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId));
    }
  }, []);
  //   console.log("check the delay");

  const productTitle = useAppSelector((state) => state.productReducer.value.productTitle);
  const status = useAppSelector((state) => state.productReducer.value.status);

  return (
    <main>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error loading product</p>}
      {status === "succeeded" && <p>{productTitle}</p>}
    </main>
  );
}
