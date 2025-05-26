import { Provider } from '@angular/core';
import { <%= classify(name) %>Repository } from '../../domain/repository/<%= dasherize(name) %>.repository';
import { <%= classify(name) %>RepositoryImplementation } from '../persistence/<%= dasherize(name) %>.repository.implementation';
import { Create<%= classify(name) %>UseCase } from '../../application/use-cases/create-<%= dasherize(name) %>.use-case';

export const <%= classify(name).toUpperCase() %>_PROVIDERS: Provider[] = [
  {
    provide: <%= classify(name) %>Repository,
    useClass: <%= classify(name) %>RepositoryImplementation
  },
  Create<%= classify(name) %>UseCase
];
