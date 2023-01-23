import { ProductModel } from './product.model';

interface CreateProductDto
  extends Omit<
    ProductModel,
    'id' | 'updateAt' | 'createdAt' | 'category' | 'user'
  > {
  categoryId: number | string;
  userId: number | string;
}

interface UpdateProductDto extends Partial<CreateProductDto> {}

export { CreateProductDto, UpdateProductDto };
