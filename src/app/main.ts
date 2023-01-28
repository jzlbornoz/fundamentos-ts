import { ProductHttpService } from './product/services/productHttp.services';
import { ProductMemoryService } from './product/services/productMemory.services';

const productMemoryService = new ProductMemoryService();

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
const productList = productMemoryService.getAll();
console.log(productList);
const product = productList[0];

productMemoryService.update(product.id, {
  title: 'producto updetead',
});

console.log(productMemoryService.getAll());

const productHttpService = new ProductHttpService();
console.log(productHttpService.getAll());
