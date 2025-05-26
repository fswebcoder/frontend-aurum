export interface <%= classify(name) %> {
  id: string;
  // Add more properties as needed
}

export class <%= classify(name) %>Implementation implements <%= classify(name) %> {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

export interface <%= classify(name) %>Repository {
  save(<%= camelize(name) %>: <%= classify(name) %>): Promise<void>;
  findById(id: string): Promise<<%= classify(name) %> | null>;
}
