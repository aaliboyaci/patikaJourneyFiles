import React from "react";
import { useSelector } from "react-redux";
import "./Styles.css";

const Balance = () => {
  const balance = useSelector((state) => state.balance);

  return (
    <div className="balance-container">
      <h2 className="balance">Bakiye: ${balance}</h2>
    </div>
  );
};

export default Balance;
