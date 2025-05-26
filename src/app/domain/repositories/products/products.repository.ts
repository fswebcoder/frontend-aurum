import { Product } from '../../entities/products/products.entity';

export interface ProductsRepository {
  save(entity: Product): Promise<void>;
  findById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  delete(id: string): Promise<void>;
  update(entity: Product): Promise<void>;
}
