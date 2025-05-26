import { Supplier } from '../../entities/suppliers/suppliers.entity';

export interface SuppliersRepository {
  save(entity: Supplier): Promise<void>;
  findById(id: string): Promise<Supplier | null>;
  findAll(): Promise<Supplier[]>;
  delete(id: string): Promise<void>;
  update(entity: Supplier): Promise<void>;
}
