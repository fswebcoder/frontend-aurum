import { <%= classify(name) %>, <%= classify(name) %>Props } from '../../domain/entity/<%= dasherize(name) %>.entity';
import { <%= classify(name) %>Repository } from '../../domain/repository/<%= dasherize(name) %>.repository';

export class Create<%= classify(name) %>UseCase {
  constructor(private readonly repository: <%= classify(name) %>Repository) {}

  async execute(props: <%= classify(name) %>Props): Promise<void> {
    const entity = new <%= classify(name) %>(props);
    await this.repository.save(entity);
  }
}
