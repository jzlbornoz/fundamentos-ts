import { BaseModel } from '../baseModel';
import { CategoryModel } from './category.model';

export interface ProductModel extends BaseModel{
  title:       string;
  price:       number;
  description: string;
  category:    CategoryModel;
  images:      string[];
  categoryId:  number;
}

