import { Injectable } from '@angular/core';
mport { <%= classify(name) %>, <%= classify(name) %>Props } from '../../../../domain/entities/<%= dasherize(name) %>s/entity/<%= dasherize(name) %>.entity';
import { <%= classify(name) %>sRepository } from '../../../../domain/repositories/<%= dasherize(name) %>s/repository/<%= dasherize(name) %>s.repository';
import { <%= classify(name) %>sDatasource } from '../../datasources/<%= dasherize(name) %>s/datasource/<%= dasherize(name) %>s.datasource';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>sRepositoryImplementation implements <%= classify(name) %>sRepository {
  constructor(private datasource: <%= classify(name) %>sDatasource) {}

  async save(entity: <%= classify(name) %>): Promise<void> {
    await this.datasource.save(entity.toJSON());
  }

  async findById(id: string): Promise<<%= classify(name) %> | null> {
    const data = await this.datasource.findById(id);
    return data ? new <%= classify(name) %>(data) : null;
  }

  async findAll(): Promise<<%= classify(name) %>[]> {
    const data = await this.datasource.findAll();
    return data.map(item => new <%= classify(name) %>(item));
  }

  async delete(id: string): Promise<void> {
    await this.datasource.delete(id);
  }

  async update(entity: <%= classify(name) %>): Promise<void> {
