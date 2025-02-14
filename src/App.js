const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Munch Mate"),
    React.createElement(Pizza, {
      name: "Veggie",
      description: "Olives, Bell peppers, Jalapeno with mozarella cheese",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza",
      description: "Mozarella cheese and Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Caprese Pizza",
      description: "Sliced Mozzarella Cheese with diced tomatoes in pesto",
    }),
  ]);
};

const container = document.getElementById("root");
const Root = ReactDOM.createRoot(container);
Root.render(React.createElement(App));
