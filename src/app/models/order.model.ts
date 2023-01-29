import { BaseModel } from '../baseModel';
import { ProductModel } from './product.model';
import { UserModel } from './user.model';

export interface OrderModel extends BaseModel {
  products: ProductModel[];
  user: UserModel;
}
