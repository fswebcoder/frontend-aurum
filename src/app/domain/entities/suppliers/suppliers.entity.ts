export interface SupplierProps {
  id: string;
  // Add your entity properties here
}

export class Supplier {
  private readonly id: string;

  constructor(props: SupplierProps) {
    this.id = props.id;
  }

  public getId(): string {
    return this.id;
  }

  public toJSON(): SupplierProps {
    return {
      id: this.id,
    };
  }
}
