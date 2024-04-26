import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Product {
  title: string;
  description: string;
  price: number;
  brand: string;
}

export const ProductCard2: React.FC = () => {
  const [product, setProduct] = useState<Product>({});

  useEffect(() => {
    const randomNumberId = Math.floor(Math.random() * 100);
    const URL = `https://dummyjson.com/products/${randomNumberId}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data: Product) => {
        setProduct(data);
      });
  }, []);

  return (
    <div
      className="card p-3 mb-2 bg-primary-subtle text-primary-emphasis"
      style={{ width: "18rem" }}
    >
      <p className="card-title text-primary">{product.title}</p>
      <p className="card-text text-secondary">
        <span className="text-black">Descripción: </span>
        {product.description}
      </p>
      <p className="card-text text-secondary">
        <span className="text-black">USD$: </span>
        {product.price}
      </p>
      <p className="card-text text-secondary">
        <span className="text-black">Marca: </span>
        {product.brand}
      </p>
    </div>
  );
};
