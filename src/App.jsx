import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Pizza from "./Pizza";
import Order from "./Order";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>MunchMate - Order Now!</h1>
        <Order />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const Root = createRoot(container);
Root.render(<App />);
