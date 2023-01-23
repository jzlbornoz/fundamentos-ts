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

interface FindProductDto extends Readonly<Partial<Omit<ProductModel, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

export { CreateProductDto, UpdateProductDto, FindProductDto };
