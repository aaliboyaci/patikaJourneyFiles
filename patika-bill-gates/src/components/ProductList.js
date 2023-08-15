import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyProduct } from "../redux/actions";
import "./Styles.css";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const handleBuy = (productId, price) => {
    if (balance >= price) {
      dispatch(buyProduct(productId, price));
    } else {
      alert("Yetersiz bakiye!");
    }
  };

  return (
    <div className="product-list-container">
      <h2>Ürün Listesi</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span className="product-name">{product.name}</span>
            <span className="product-price">${product.price}</span>
            <button
              className="buy-button"
              onClick={() => handleBuy(product.id, product.price)}
            >
              Satın Al
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
