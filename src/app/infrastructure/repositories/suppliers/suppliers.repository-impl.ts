import { Injectable } from '@angular/core';
import { Supplier, SupplierProps } from '../../../domain/entities/suppliers/suppliers.entity';
import { SuppliersRepository } from '../../../domain/repositories/suppliers/suppliers.repository';
import { SuppliersDatasource } from '../../datasources/suppliers/suppliers.datasource';

@Injectable({
  providedIn: 'root'
})
export class SuppliersRepositoryImpl implements SuppliersRepository {
  constructor(private datasource: SuppliersDatasource) {}

  async save(entity: Supplier): Promise<void> {
    await this.datasource.save(entity.toJSON());
  }

  async findById(id: string): Promise<Supplier | null> {
    const data = await this.datasource.findById(id);
    return data ? new Supplier(data) : null;
  }

  async findAll(): Promise<Supplier[]> {
    const data = await this.datasource.findAll();
    return data.map(item => new Supplier(item));
  }

  async delete(id: string): Promise<void> {
    await this.datasource.delete(id);
  }

  async update(entity: Supplier): Promise<void> {
    await this.datasource.update(entity.toJSON());
  }
}
