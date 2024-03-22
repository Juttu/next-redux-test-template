import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProduct } from "@/redux/features/product-slice";
import { AppDispatch } from "@/redux/store";

type ProductDetails = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
};

export default function ProductDetails({ id }: { id: number }) {
  const dispatch = useDispatch<AppDispatch>();
  const [product, setProduct] = useState<ProductDetails | any>(null);

  useEffect(() => {
    dispatch(fetchProduct(id)).then((res) => {
      if (res.payload) {
        setProduct(res.payload);
      }
    });
  }, [dispatch, id]);

  if (!product) {
    return <p>Loading Product Details...</p>;
  }

  return (
    <>
      <h1>Complete Details of the product</h1>
      <h1>{product.id}</h1>
      <h1>{product.brand}</h1>
    </>
  );
}
