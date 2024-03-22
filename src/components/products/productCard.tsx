"use client";
import Link from "next/link";
import "./products.module.css";
interface ProductCardProps {
  product: ProductDetails;
}

type ProductDetails = {
  id: number;
  title: string;
  description: string;
  price: number;
};
export default function ProductCard({ product }: ProductCardProps) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    marginBottom: "8px",
  };

  return (
    <Link href={`/products/${product.id}/details`}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>{product.title}</h2>
        <p>{product.description}</p>
        <p style={{ fontWeight: "bold" }}>Price: {product.price}</p>
      </div>
    </Link>
  );
}
