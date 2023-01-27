import axios from 'axios';

(async () => {
  const delay = (time: number) => {
    const myPromise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('hola mundo');
      }, time);
    });
    return myPromise;
  };

  const getProducts = () => {
    const productsPromise = axios.get(
      'https://api.escuelajs.co/api/v1/products'
    );
    return productsPromise;
  };

  async function getProductsAsync() {
    const { data } = await axios.get(
      'https://api.escuelajs.co/api/v1/products'
    );
    return data;
  }

  console.log(delay(3000));
  console.log('---'.repeat(15));

  const rta = await delay(3000);
  console.log(rta);
  console.log('---'.repeat(15));

  console.log(getProducts());
  const res = await getProducts();
  console.log(res.data);
  console.log('---'.repeat(15));

  console.log(getProductsAsync());
  const products = await getProducts();
  console.log(products);
})();
