import React from "react";
import { useSelector } from "react-redux";
import "./Styles.css";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);

  const groupedCart = cart.reduce((grouped, item) => {
    if (!grouped[item.productId]) {
      grouped[item.productId] = { ...item, totalQuantity: item.quantity };
    } else {
      grouped[item.productId].totalQuantity += item.quantity;
    }
    return grouped;
  }, {});

  const totalSpent = Object.values(groupedCart).reduce(
    (total, item) => total + item.totalQuantity * item.price,
    0
  );

  return (
    <div className="shopping-cart-container">
      <h2>Sepet</h2>
      <ul className="cart-list">
        {Object.values(groupedCart).map((item) => (
          <li key={item.productId} className="cart-item">
            <span className="product-name">{item.productName}</span>
            <span className="product-quantity">{item.totalQuantity} adet</span>
          </li>
        ))}
      </ul>
      <p className="total-spent">Toplam Harcama Tutarı: ${totalSpent}</p>
    </div>
  );
};

export default ShoppingCart;
