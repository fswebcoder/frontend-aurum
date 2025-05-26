export interface <%= classify(name) %>Props {
  id: string;
  // Add your entity properties here
}

export class <%= classify(name) %> {
  private readonly id: string;

  constructor(props: <%= classify(name) %>Props) {
    this.id = props.id;
  }

  public getId(): string {
    return this.id;
  }

  public toJSON(): <%= classify(name) %>Props {
    return {
      id: this.id,
    };
  }
}
