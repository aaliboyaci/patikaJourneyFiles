import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductList from "./components/ProductList";
import Balance from "./components/Balance";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Bill Gates'in Harcamaları</h1>
        <Balance />
        <ProductList />
        <ShoppingCart />
      </div>
    </Provider>
  );
}

export default App;
