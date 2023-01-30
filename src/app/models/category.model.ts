import { BaseModel } from '../baseModel';

export enum AccessType {
  PRIVATE = 'private',
  PUBLIC = 'public',
}
export interface CategoryModel extends BaseModel {
  name: string;
  image: string;
  access?: AccessType;
}
