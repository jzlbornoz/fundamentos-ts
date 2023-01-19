export enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner',
  SELLER = 'seller',
}
export interface UserModel {
  id: number | string;
  userName: string;
  createdAt: Date;
  password: string | number;
  points?: number;
  role?: ROLES;
}
