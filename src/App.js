const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Munch Mate")
  );
};

const container = document.getElementById("root");
const Root = ReactDOM.createRoot(container);
Root.render(React.createElement(App));
