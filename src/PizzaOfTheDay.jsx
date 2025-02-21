import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();
  if (!pizzaOfTheDay) {
    return <div>Loading...</div>;
  }
  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the day</h2>
      <div className="pizza-of-the-day-info">
        <h3>{pizzaOfTheDay.name}</h3>
        <p>{pizzaOfTheDay.description}</p>
        <p className="pizza-of-the-day-price">
          From: {intl.format(pizzaOfTheDay.sizes.s)}
        </p>
      </div>
      <img
        classname="pizza-of-the-day-image"
        // src={pizzaOfTheDay.image}
        src={`http://localhost:3000${pizzaOfTheDay.image}`}
        alt={pizzaOfTheDay.name}
      />
    </div>
  );
};

export default PizzaOfTheDay;
