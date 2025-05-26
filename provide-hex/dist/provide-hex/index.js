"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provideHex = provideHex;
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function provideHex(_options) {
    return (tree, _context) => {
        const sourceTemplates = (0, schematics_1.url)('./files');
        const sourceParametrizedTemplates = (0, schematics_1.apply)(sourceTemplates, [
            (0, schematics_1.template)(Object.assign(Object.assign(Object.assign({}, _options), core_1.strings), { classify: core_1.strings.classify, dasherize: core_1.strings.dasherize, camelize: core_1.strings.camelize })),
            (0, schematics_1.filter)(path => {
                // Rechazar archivos en singular
                if (path.includes(`/${_options.name}/`))
                    return false;
                // Rechazar archivos con sufijos antiguos
                if (path.endsWith('.implementation.ts'))
                    return false;
                if (path.endsWith('.query.ts'))
                    return false;
                // Rechazar archivos en carpetas redundantes
                if (path.includes('/entity/'))
                    return false;
                if (path.includes('/repository/'))
                    return false;
                if (path.includes('/datasource/'))
                    return false;
                if (path.includes('/implementation/'))
                    return false;
                if (path.includes('/implementations/'))
                    return false;
                if (path.includes('/interfaces/'))
                    return false;
                if (path.includes('/models/'))
                    return false;
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
            (0, schematics_1.move)('src/app')
        ]);
        return (0, schematics_1.chain)([
            (0, schematics_1.mergeWith)(sourceParametrizedTemplates)
        ])(tree, _context);
    };
}
//# sourceMappingURL=index.js.map