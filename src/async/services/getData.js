( async () => {

  const randomNumberId = Math.floor(Math.random() * 100);
  console.log(randomNumberId);
  const URL = `https://dummyjson.com/products/${randomNumberId}`;
  const response = await fetch(URL);
  
  const data = await response.json();

  console.log(data);

})();