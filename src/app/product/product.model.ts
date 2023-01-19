import { BaseModel } from '../baseModel';
import { CategoryModel } from '../category/category.model';
import { UserModel } from '../users/user.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface ProductModel extends BaseModel {
  name: string;
  seller: UserModel;
  stock: number;
  sizes?: Sizes;
  category: CategoryModel;
}
