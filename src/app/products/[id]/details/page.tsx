import { Suspense, useEffect } from "react";
import ProductDetails from "@/components/products/productDetails";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);

  return (
    <>
      <h1>Product Details with an ID</h1>
      <Suspense fallback={<>Loading Page...</>}>
        <ProductDetails id={id} />
      </Suspense>
    </>
  );
}
