import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { ProductModel } from './product.model';

export interface ProductServiceModel {
  getAll(limit?: number): ProductModel[] | Promise<ProductModel[]>;
  create(data: CreateProductDto): ProductModel | Promise<ProductModel>;
  findById(
    id: ProductModel['id']
  ): ProductModel | undefined | Promise<ProductModel | undefined>;
  update(
    id: ProductModel['id'],
    data: UpdateProductDto
  ): ProductModel | Promise<ProductModel>;
  delete(id: ProductModel['id']): void | Promise<ProductModel>;
}
