import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Order from "./Order";
import Header from "./Header";

const App = () => {
  return (
    <StrictMode>
      <div>
        {/* <h1>MunchMate - Order Now!</h1> */}
        <Header />
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const Root = createRoot(container);
Root.render(<App />);
