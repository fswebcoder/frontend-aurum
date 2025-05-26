import { Injectable } from '@angular/core';
import { <%= classify(name) %>Props } from '../../../../domain/entities/<%= dasherize(name) %>s/entity/<%= dasherize(name) %>.entity';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>sDatasource {
  private items: <%= classify(name) %>Props[] = [];

  async save(item: <%= classify(name) %>Props): Promise<void> {
    this.items.push(item);
  }

  async findById(id: string): Promise<<%= classify(name) %>Props | null> {
    return this.items.find(item => item.id === id) || null;
  }

  async findAll(): Promise<<%= classify(name) %>Props[]> {
    return [...this.items];
  }

  async delete(id: string): Promise<void> {
    this.items = this.items.filter(item => item.id !== id);
  }

  async update(item: <%= classify(name) %>Props): Promise<void> {
    const index = this.items.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.items[index] = item;
    }
  }
}
