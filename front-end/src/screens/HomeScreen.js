import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const HomeScreen = (props) => {
  const [products, setProducts] = useState([]);
  const productList = useSelector((state) => state.productList);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
    return () => {
      //
    };
  }, []);

  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product">
            <Link to={`/sayadins/${product._id}`}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </Link>

            <div className="product-name">
              <Link to={`/sayadins/${product._id}`}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews} Reviews)
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HomeScreen;
