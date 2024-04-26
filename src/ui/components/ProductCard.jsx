import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { URL } from "../../async/services/getData";

export const ProductCard = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
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
        <span className="text-black ">USD$: </span>
        {product.price}
      </p>
      <p className="card-text text-secondary">
        <span className="text-black ">Marca: </span>
        {product.brand}
      </p>
    </div>
  );
};
