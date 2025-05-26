import { Injectable } from '@angular/core';
import { <%= classify(name) %>, <%= classify(name) %>Props } from '../../../domain/entities/<%= dasherize(name) %>s/models/<%= dasherize(name) %>.entity';
import { <%= classify(name) %>Repository } from '../../../domain/repositories/<%= dasherize(name) %>s/interfaces/<%= dasherize(name) %>.repository';
import { <%= classify(name) %>sDatasource } from '../../datasources/<%= dasherize(name) %>s/<%= dasherize(name) %>s.datasource';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>sRepositoryImplementation implements <%= classify(name) %>Repository {
  constructor(private readonly datasource: <%= classify(name) %>sDatasource) {}

  async save(entity: <%= classify(name) %>): Promise<void> {
    await this.datasource.save(entity.toJSON());
  }

  async findById(id: string): Promise<<%= classify(name) %> | null> {
    const data = await this.datasource.findById(id);
    return data ? new <%= classify(name) %>(data) : null;
  }

  async findAll(): Promise<<%= classify(name) %>[]> {
    const items = await this.datasource.findAll();
    return items.map(item => new <%= classify(name) %>(item));
  }

  async delete(id: string): Promise<void> {
    await this.datasource.delete(id);
  }

  async update(entity: <%= classify(name) %>): Promise<void> {
    await this.datasource.update(entity.toJSON());
  }
}