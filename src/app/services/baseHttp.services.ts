import axios from 'axios';
import { apiUrl } from '../api';
import { CategoryModel } from '../models/category.model';
import { ProductModel } from '../models/product.model';

class BaseHttpService<T> {
  constructor(private url: string) {}

  async getAll(limit?: number) {
    if (limit) {
      const { data } = await axios.get<T[]>(
        `${this.url}?limit=${limit}&offset=0`
      );
      return data;
    }
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }
}

(async () => {
  const Api = apiUrl;
  const service = new BaseHttpService<ProductModel>(`${Api}/products`);
  const res = await service.getAll();
  console.log('Products', res.length);

  const service2 = new BaseHttpService<CategoryModel>(`${Api}/categories`);
  const rta = await service2.getAll();
  console.log('categories', rta.length);
})();
