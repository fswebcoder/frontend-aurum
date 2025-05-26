import { Injectable } from '@angular/core';
import { <%= classify(name) %>, <%= classify(name) %>Props } from '../../entities/<%= dasherize(name) %>/<%= dasherize(name) %>.entity';
import { <%= classify(name) %>Repository } from '../../repositories/<%= dasherize(name) %>/<%= dasherize(name) %>.repository';

@Injectable()
export class Create<%= classify(name) %>UseCase {
  constructor(private readonly repository: <%= classify(name) %>Repository) {}

  async execute(props: <%= classify(name) %>Props): Promise<void> {
    const entity = new <%= classify(name) %>(props);
    await this.repository.save(entity);
  }
}
