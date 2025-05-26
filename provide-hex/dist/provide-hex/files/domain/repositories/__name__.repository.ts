import { <%= classify(name) %> } from '../entities/<%= dasherize(name) %>.entity';

export interface <%= classify(name) %>Repository {
  save(entity: <%= classify(name) %>): Promise<void>;
  findById(id: string): Promise<<%= classify(name) %> | null>;
  findAll(): Promise<<%= classify(name) %>[]>;
  delete(id: string): Promise<void>;
  update(entity: <%= classify(name) %>): Promise<void>;
}
