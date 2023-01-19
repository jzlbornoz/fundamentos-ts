import { ProductModel } from './product.model';

export const products: ProductModel[] = [];

export const addProduct = (data: ProductModel) => {
  products.push(data);
};
