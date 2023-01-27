import { ProductMemoryService } from './product/product.services';

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
const productList = productMemoryService.get();
console.log(productList);
const product = productList[0];

productMemoryService.update(product.id, {
  title: 'producto updetead',
});

console.log(productMemoryService.get());
