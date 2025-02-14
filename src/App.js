const Pizza = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Veggie Pizza"),
    React.createElement("p", {}, "Mozzarella Cheese, Veggies"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Munch Mate"),
    React.createElement(Pizza),
    React.createElement(Pizza),
    React.createElement(Pizza),
  ]);
};

const container = document.getElementById("root");
const Root = ReactDOM.createRoot(container);
Root.render(React.createElement(App));
