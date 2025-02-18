import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>MunchMate - Order Now!</h1>
      <Pizza name="Pepperoni" description="Pepperoni and Cheese" />
      <Pizza
        name="Veggies"
        description="Olives, Peppers, Tomatoes, Jalapenos"
      />
      <Pizza name="Caprese" description="Sliced Mozarella with tomatoes" />
    </div>
  );
};

const container = document.getElementById("root");
const Root = createRoot(container);
Root.render(<App />);
