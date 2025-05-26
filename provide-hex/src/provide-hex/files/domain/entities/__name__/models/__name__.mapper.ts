import { <%= classify(name) %>, <%= classify(name) %>Props } from './<%= dasherize(name) %>.entity';
import { <%= classify(name) %>DTO } from './<%= dasherize(name) %>.dto';

export class <%= classify(name) %>Mapper {
  static toDTO(entity: <%= classify(name) %>): <%= classify(name) %>DTO {
    return {
      id: entity.getId(),
    };
  }

  static toDomain(dto: <%= classify(name) %>DTO): <%= classify(name) %> {
    return new <%= classify(name) %>({
      id: dto.id,
    });
  }
}
