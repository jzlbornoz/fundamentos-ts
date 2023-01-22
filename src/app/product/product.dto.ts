import { ProductModel } from './product.model';

interface CreateProductDto
  extends Omit<
    ProductModel,
    'id' | 'updateAt' | 'createdAt' | 'category' | 'user'
  > {
  categoryId: number | string;
  userId: number | string;
}

export { CreateProductDto };
