import { BaseModel } from '../baseModel';
import { ProductModel } from '../product/models/product.model';
import { UserModel } from '../users/user.model';

export interface OrderModel extends BaseModel {
  products: ProductModel[];
  user: UserModel;
}
