import { CategoryModel } from './category.model';

const categoryList: CategoryModel[] = [];

const addCategory = (input: CategoryModel) => {
  categoryList.push(input);
};

export { categoryList, addCategory };
