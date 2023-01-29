import { ProductModel } from '../../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../../dto/product.dto';
import { faker } from '@faker-js/faker';
import { ProductServiceModel } from '../../models/productService.model';

type ProductId = ProductModel['id'];

class ProductMemoryService implements ProductServiceModel{
  private productsList: ProductModel[] = [];

  getAll(): ProductModel[] {
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

    this.productsList.push(newProduct);
    return newProduct;
  }

  findById(id: ProductId): ProductModel {
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

  delete(id: ProductId) {
    const product = this.productsList.findIndex((item) => item.id == id);
    this.productsList.splice(product, 1);
  }
}

export { ProductMemoryService };
