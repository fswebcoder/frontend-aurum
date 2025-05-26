import { Injectable } from '@angular/core';
import { Product, ProductProps } from '../../../domain/entities/products/products.entity';
import { ProductsRepository } from '../../../domain/repositories/products/products.repository';
import { ProductsDatasource } from '../../datasources/products/products.datasource';

@Injectable({
  providedIn: 'root'
})
export class ProductsRepositoryImpl implements ProductsRepository {
  constructor(private datasource: ProductsDatasource) {}

  async save(entity: Product): Promise<void> {
    await this.datasource.save(entity.toJSON());
  }

  async findById(id: string): Promise<Product | null> {
    const data = await this.datasource.findById(id);
    return data ? new Product(data) : null;
  }

  async findAll(): Promise<Product[]> {
    const data = await this.datasource.findAll();
    return data.map(item => new Product(item));
  }

  async delete(id: string): Promise<void> {
    await this.datasource.delete(id);
  }

  async update(entity: Product): Promise<void> {
    await this.datasource.update(entity.toJSON());
  }
}
