import { CategoryModel } from '../category/category.model';
import { UserModel } from '../users/user.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface ProductModel {
  id: string | number;
  name: string;
  createdAt: Date;
  seller: UserModel;
  stock: number;
  sizes?: Sizes;
  category: CategoryModel;
}
