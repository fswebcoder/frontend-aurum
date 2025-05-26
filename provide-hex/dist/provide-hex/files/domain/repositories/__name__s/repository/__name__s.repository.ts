import { <%= classify(name) %> } from '../../../entities/<%= dasherize(name) %>s/entity/<%= dasherize(name) %>.entity';

export interface <%= classify(name) %>sRepository {
  save(entity: <%= classify(name) %>): Promise<void>;
  findById(id: string): Promise<<%= classify(name) %> | null>;
  findAll(): Promise<<%= classify(name) %>[]>;
  delete(id: string): Promise<void>;
  update(entity: <%= classify(name) %>): Promise<void>;
}
