export interface Supplier {
  id: string;
  // Add more properties as needed
}

export class SupplierImplementation implements Supplier {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

export interface SupplierRepository {
  save(supplier: Supplier): Promise<void>;
  findById(id: string): Promise<Supplier | null>;
}
