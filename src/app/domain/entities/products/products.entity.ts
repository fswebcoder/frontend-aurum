export interface ProductProps {
  id: string;
  // Add your entity properties here
}

export class Product {
  private readonly id: string;

  constructor(props: ProductProps) {
    this.id = props.id;
  }

  public getId(): string {
    return this.id;
  }

  public toJSON(): ProductProps {
    return {
      id: this.id,
    };
  }
}
