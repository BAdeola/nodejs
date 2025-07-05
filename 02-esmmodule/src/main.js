//import connectToDatabase from "./utils/database.mjs"; para importar apenas 1 subprograma
//no esm é necessário colocar o tipo de arquivo ".mjs" se não ele não encontrará o módulo. || .mjs é um tipo de extensão que representa que o arquivo é apenas um módulo de exportação, é apenas uma boa prática para identificação visual

import * as api from "./utils/api.js"; // para importar todos os subprogramas do módulo
import { disconectDatabase, databaseType } from "./utils/database.mjs"; // para importar apenas os subprogramas desejados.

disconectDatabase();
console.log(databaseType.typeData);

api.getDataFromApi();
console.log(api.key.key);