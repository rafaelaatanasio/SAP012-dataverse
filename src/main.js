
import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const root = document.querySelector("#root");
const button = document.querySelector("#clear-button");

// as ids : search-section, org-section, filter-section, button-section, credits

const comboOrganizar = document.getElementById('order');
comboOrganizar.addEventListener('change', () => { // colocar .target.value.... valores do evento de mudança do clique
  console.log("clicou em organizar")
});

const comboFiltrar = document.getElementById('filters');
comboFiltrar.addEventListener('change', () => {
  console.log("clicou no filtrar")
});

root.innerHTML=renderItems(data)


const cards = document.querySelectorAll('.cards li'); // ou content__card

comboFiltrar.addEventListener('input, filters');


function filters() {
  if(comboFiltrar.textContent != ""){

    for (let card || cards){

    }
    let title = cards.querySelector('h2')
  
    title = title.textContent.toLowerCase()
  
  }

}

// Recomendamos usar src/main.js para todo o seu código relacionado à exibição dos dados na tela. Basicamente, nos referimos à interação com o DOM. Operações como criação de nós, registro de manipuladores de eventos (event listeners ou event handlers).

// Neste arquivo, você encontrará uma série de imports prontos para carregar as diferentes fontes de dados.

// Por exemplo, os dados com os quais você irá trabalhar, serão encontrados na seguinte linha:

// import data from './data/dataset.js';