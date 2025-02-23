export default async function getPastOrders(page) {
  const response = await fetch(`/api/past-orders?page=${page}`);
  const data = await response.json();

  console.log("API Response:", data); // Debugging log
  return data;
}
