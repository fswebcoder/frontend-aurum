import { Injectable } from '@angular/core';
import { ProductProps } from '../../../domain/entities/products/products.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductsDatasource {
  private items: ProductProps[] = [];

  async save(item: ProductProps): Promise<void> {
    this.items.push(item);
  }

  async findById(id: string): Promise<ProductProps | null> {
    return this.items.find(item => item.id === id) || null;
  }

  async findAll(): Promise<ProductProps[]> {
    return [...this.items];
  }

  async delete(id: string): Promise<void> {
    this.items = this.items.filter(item => item.id !== id);
  }

  async update(item: ProductProps): Promise<void> {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.items[index] = item;
    }
  }
}
