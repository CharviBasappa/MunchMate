import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Order from "./Order";
import Header from "./Header";
import { CartContext } from "./contexts";

const App = () => {
  const carHook = useState([]);
  return (
    <StrictMode>
      <CartContext.Provider value={carHook}>
        <div>
          {/* <h1>MunchMate - Order Now!</h1> */}
          <Header />
          <Order />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const Root = createRoot(container);
Root.render(<App />);
