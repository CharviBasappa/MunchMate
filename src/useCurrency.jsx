const intl = new Intl.NumberFormat("en-US", {
  style: "curremcy",
  currency: "USD",
});

export const priceConverter = (price) => intl.format(price);
export default function useCurrency(price) {
  return priceConverter(price);
}
