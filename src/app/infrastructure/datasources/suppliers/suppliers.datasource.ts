import { Injectable } from '@angular/core';
import { SupplierProps } from '../../../domain/entities/suppliers/suppliers.entity';

@Injectable({
  providedIn: 'root'
})
export class SuppliersDatasource {
  private items: SupplierProps[] = [];

  async save(item: SupplierProps): Promise<void> {
    this.items.push(item);
  }

  async findById(id: string): Promise<SupplierProps | null> {
    return this.items.find(item => item.id === id) || null;
  }

  async findAll(): Promise<SupplierProps[]> {
    return [...this.items];
  }

  async delete(id: string): Promise<void> {
    this.items = this.items.filter(item => item.id !== id);
  }

  async update(item: SupplierProps): Promise<void> {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.items[index] = item;
    }
  }
}
