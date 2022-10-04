import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Carts/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function clickedCartHandler(params) {
    setCartIsShown(!cartIsShown);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onShowCart={clickedCartHandler} />}
      <Header onShowCart={clickedCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
