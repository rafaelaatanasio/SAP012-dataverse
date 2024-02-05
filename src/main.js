import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

document.querySelector(#root).innerHTML = renderItems(data);
//innerHTML => renderItems retorna uma string
//appendChild(elementos) => retorna um elemento HTML criado

// filtrar => retornar um array de 5 elementos
// usar renderItems para printar uma array de 5 elementos
