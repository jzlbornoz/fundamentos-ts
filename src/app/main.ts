import { ProductHttpService } from './services/products/productHttp.services';
import { ProductMemoryService } from './services/products/productMemory.services';

const productMemoryService = new ProductMemoryService();
const productHttpService = new ProductHttpService();

(async () => {
  console.log(
    'ProductList Http',
    (await productHttpService.getAll()).map((item) => item.price)
  );
  console.log('----'.repeat(16));
  const productList = await productHttpService.getAll();
  productHttpService.update(productList[0].id, {
    title: 'Product Nuevo :)',
    price: 89,
  });
  console.log('ProductList Http Updated', await productHttpService.getAll(4));
})();

console.log('----'.repeat(16));
for (let i = 0; i < 3; i++) {
  productMemoryService.create({
    title: `new product ${i}`,
    price: 12 + i,
    categoryId: 1,
    description: `Mi  nuevo producto ${i}`,
    userId: 12,
    images: [],
  });
}
console.log('ProductsList in Memory', productMemoryService.getAll());
