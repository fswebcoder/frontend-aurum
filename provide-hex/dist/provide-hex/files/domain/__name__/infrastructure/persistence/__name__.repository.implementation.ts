import { Injectable } from '@angular/core';
import { <%= classify(name) %> } from '../../domain/entity/<%= dasherize(name) %>.entity';
import { <%= classify(name) %>Repository } from '../../domain/repository/<%= dasherize(name) %>.repository';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>RepositoryImplementation implements <%= classify(name) %>Repository {
  private items: <%= classify(name) %>[] = [];

  async save(entity: <%= classify(name) %>): Promise<void> {
    this.items.push(entity);
  }

  async findById(id: string): Promise<<%= classify(name) %> | null> {
    return this.items.find(item => item.getId() === id) || null;
  }

  async findAll(): Promise<<%= classify(name) %>[]> {
    return [...this.items];
  }

  async delete(id: string): Promise<void> {
    this.items = this.items.filter(item => item.getId() !== id);
  }

  async update(entity: <%= classify(name) %>): Promise<void> {
    const index = this.items.findIndex(item => item.getId() === entity.getId());
    if (index !== -1) {
      this.items[index] = entity;
    }
  }
}
