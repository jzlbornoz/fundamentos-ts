import axios from 'axios';
import { ProductModel } from '../../models/product.model';
import { ProductServiceModel } from '../../models/productService.model';
import { CreateProductDto, UpdateProductDto } from '../../dto/product.dto';

class ProductHttpService implements ProductServiceModel {
  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll(limit?: number) {
    if (limit) {
      const { data } = await axios.get<ProductModel[]>(
        `${this.url}?limit=${limit}&offset=0`
      );
      return data;
    }
    const { data } = await axios.get<ProductModel[]>(this.url);
    return data;
  }
  async create(dto: CreateProductDto) {
    const NewProduct = await axios.post<ProductModel>(this.url, dto);
    return NewProduct.data;
  }

  async findById(id: ProductModel['id']) {
    const productToFind = await axios.get<ProductModel>(`${this.url}/${id}`);
    if (productToFind.data) {
      return productToFind.data;
    } else {
      return undefined;
    }
  }
  async update(id: ProductModel['id'], dto: UpdateProductDto) {
    const { data } = await axios.put<ProductModel>(`${this.url}/${id}`, dto);
    return data;
  }
  async delete(id: ProductModel['id']) {
    const { data } = await axios.delete<ProductModel>(`${this.url}/${id}`);
    return data;
  }
}

export { ProductHttpService };
