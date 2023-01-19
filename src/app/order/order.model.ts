import { ProductModel } from '../product/product.model';
import { UserModel } from '../users/user.model';

export interface OrderModel {
  id: string | number;
  createdAt: Date;
  products: ProductModel[];
  user: UserModel;
}
