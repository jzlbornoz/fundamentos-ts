import { ProductModel } from './product.model';

type ProductId = string | number;

export const productsList: ProductModel[] = [];

export const getProducts = () => {
  return productsList;
};

export const findProductById = (id: ProductId) => {
  const productIndex: number = productsList.findIndex((item) => item.id == id);
  if (productIndex == -1) {
    throw new Error('Producto no encotrado');
  }
  const product: ProductModel = productsList[productIndex];
  return product;
};

export const addProduct = (data: ProductModel) => {
  productsList.push(data);
};

export const updateProduct = (id: ProductId, data: object) => {
  let product: ProductModel = findProductById(id);
  const updatedProduct: ProductModel = {
    ...product,
    ...data,
  };
  product = updatedProduct;
};

export const deleteProduct = (id: ProductId) => {
  const product = productsList.findIndex((item) => item.id == id);
  productsList.splice(product, 1);
};
