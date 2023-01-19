import { BaseModel } from '../baseModel';

export enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner',
  SELLER = 'seller',
}
export interface UserModel extends BaseModel {
  userName: string;
  password: string | number;
  points?: number;
  role?: ROLES;
}
