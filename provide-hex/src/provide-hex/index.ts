import { Rule, SchematicContext, Tree, apply, url, template, move, chain, mergeWith, filter } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema } from './schema';

export function provideHex(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplates = url('./files');
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        classify: strings.classify,
        dasherize: strings.dasherize,
        camelize: strings.camelize
      }),
      filter(path => {
        // Rechazar archivos en singular
        if (path.includes(`/${_options.name}/`)) return false;

        // Rechazar archivos con sufijos antiguos
        if (path.endsWith('.implementation.ts')) return false;
        if (path.endsWith('.query.ts')) return false;

        // Rechazar archivos en carpetas redundantes
        if (path.includes('/entity/')) return false;
        if (path.includes('/repository/')) return false;
        if (path.includes('/datasource/')) return false;
        if (path.includes('/implementation/')) return false;
        if (path.includes('/implementations/')) return false;
        if (path.includes('/interfaces/')) return false;
        if (path.includes('/models/')) return false;

        // Validar ubicaciones correctas de archivos
        const validPaths = [
          `/domain/entities/${_options.name}s/`,
          `/domain/repositories/${_options.name}s/`,
          `/domain/use-cases/${_options.name}s/`,
          `/infrastructure/datasources/${_options.name}s/`,
          `/infrastructure/repositories/${_options.name}s/`
        ];

        return validPaths.some(validPath => path.includes(validPath));
      }),
      move('src/app')
    ]);

    return chain([
      mergeWith(sourceParametrizedTemplates)
    ])(tree, _context);
  };
}
