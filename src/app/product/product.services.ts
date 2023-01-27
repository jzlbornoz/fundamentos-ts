import { ProductModel } from './product.model';
import { CreateProductDto, UpdateProductDto } from './product.dto';
import { faker } from '@faker-js/faker';
import axios from 'axios';

type ProductId = ProductModel['id'];

export const productsList: ProductModel[] = [];

export async function getProducts(): Promise<ProductModel[]> {
  const { data } = await axios.get<ProductModel[]>(
    'https://api.escuelajs.co/api/v1/products'
  );
  return data;
}

export const findProductById = (id: ProductId) => {
  const productIndex: number = productsList.findIndex((item) => item.id == id);
  if (productIndex == -1) {
    throw new Error('Producto no encotrado');
  }
  const product: ProductModel = productsList[productIndex];
  return product;
};

export const addProduct = (data: CreateProductDto): ProductModel => {
  const newProduct: ProductModel = {
    ...data,
    id: 12,
    createdAt: new Date(),
    updateAt: new Date(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      image: faker.image.sports(),
      createdAt: new Date(),
      updateAt: new Date(),
    },
  };
  productsList.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: ProductId,
  data: UpdateProductDto
): ProductModel => {
  const index = productsList.findIndex((item) => item.id == id);
  const productToChange = productsList[index];
  const UpdatedProduct = (productsList[index] = {
    ...productToChange,
    ...data,
  });
  return UpdatedProduct;
};

export const deleteProduct = (id: ProductId) => {
  const product = productsList.findIndex((item) => item.id == id);
  productsList.splice(product, 1);
};
