import { ProductModel } from './product.model';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { faker } from '@faker-js/faker';
import axios from 'axios';

type ProductId = ProductModel['id'];

class ProductMemoryService {
  private productsList: ProductModel[] = [];

  get() {
    return this.productsList;
  }

  create(data: CreateProductDto): ProductModel {
    const newProduct: ProductModel = {
      ...data,
      id: 12,
      createdAt: new Date(),
      updateAt: new Date(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
        createdAt: new Date(),
        updateAt: new Date(),
      },
    };

    return this.add(newProduct);
  }

  add(product: ProductModel): ProductModel {
    this.productsList.push(product);
    return product;
  }

  findById(id: ProductId) {
    const productIndex: number = this.productsList.findIndex(
      (item) => item.id == id
    );
    if (productIndex == -1) {
      throw new Error('Producto no encotrado');
    }
    const product: ProductModel = this.productsList[productIndex];
    return product;
  }

  update(id: ProductId, data: UpdateProductDto): ProductModel {
    const index = this.productsList.findIndex((item) => item.id == id);
    const productToChange = this.productsList[index];
    const UpdatedProduct = (this.productsList[index] = {
      ...productToChange,
      ...data,
    });
    return UpdatedProduct;
  }

  deleteProduct(id: ProductId) {
    const product = this.productsList.findIndex((item) => item.id == id);
    this.productsList.splice(product, 1);
  }
}

export { ProductMemoryService };
