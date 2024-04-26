const randomNumberId = Math.floor(Math.random() * 100);
export const URL = `https://dummyjson.com/products/${randomNumberId}`;
(async () => {
  const response = await fetch(URL);

  const data = await response.json();

  console.log(data);
})();
