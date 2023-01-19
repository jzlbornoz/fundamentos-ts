import { ProductModel } from './product.model';

export const productsList: ProductModel[] = [];

export const addProduct = (data: ProductModel) => {
  productsList.push(data);
};
