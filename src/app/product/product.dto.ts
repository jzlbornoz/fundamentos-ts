import { ProductModel } from './models/product.model';
import { CategoryModel } from '../category/category.model';

interface CreateProductDto
  extends Omit<
    ProductModel,
    'id' | 'updateAt' | 'createdAt' | 'category' | 'user'
  > {
  categoryId: CategoryModel['id'];
  userId: number | string;
}

interface UpdateProductDto extends Partial<CreateProductDto> {}

interface FindProductDto extends Readonly<Partial<Omit<ProductModel, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

export { CreateProductDto, UpdateProductDto, FindProductDto };
