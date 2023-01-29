import axios from 'axios';
import { apiUrl } from '../api';
import { UpdateProductDto } from '../dto/product.dto';
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
  async update<K, E>(id: K, dto: E) {
    const { data } = await axios.put<ProductModel>(`${this.url}/${id}`, dto);
    return data;
  }
}

(async () => {
  const Api = apiUrl;
  const service = new BaseHttpService<ProductModel>(`${Api}/products`);

  const res = await service.getAll();
  console.log('Products', res.length);
  const rta = await service.update<ProductModel['id'], UpdateProductDto>(58, {
    title: 'Producto updateado',
  });
  console.log(rta);

  const service2 = new BaseHttpService<CategoryModel>(`${Api}/categories`);
  const rta2 = await service2.getAll();
  console.log('categories', rta2.length);
})();
