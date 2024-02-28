import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

/* Renderizar cards */

const root = document.querySelector("#root");
root.innerHTML = renderItems(data);

/* Pra que serve esse evento? */

document.addEventListener("DOMContentLoaded", function () {
  const comboFiltrar = document.getElementById("filter-state");
  const clearButton = document.getElementById("clear-button");
  const comboOrganizar = document.getElementById("order");
 
  /* Filtro por Estado */

  comboFiltrar.addEventListener("change", (event) => {
    // Aqui você pode aplicar a lógica de filtro com base no estado selecionado
    //1 etapa: chamar a função de filtro no data function. 2 etapa: com o retorno da função, renderizar novamente os cards com uma lista nova (poderia usar o map)
    const selectedState = filterData(data, "brState", event.target.value);
    console.log("Estado selecionado:", selectedState);
    root.innerHTML = renderItems(selectedState);
  });
  
  /* Organizar AZ */
  
  comboOrganizar.addEventListener("change", (event) => {
    // Aqui você pode aplicar a lógica de filtro com base na ordenação selecionada
    const azOrg = sortData(data, "name", event.target.value);
    root.innerHTML = renderItems(azOrg);
  });
  
  /* Organizar ZA */

  // comboOrganizar.addEventListener("change", (event) => {
  //   const zaOrg = sortZa(data, "name", event.target.value);
  //   root.innerHTML = renderItems(zaOrg);
  // });

  /* Limpar Filtro e Organização */

  //posso adicionar um evento que retorne o filtro e a organização para o estado inicial?
  clearButton.addEventListener("click", function () {
    comboOrganizar.selectedIndex = 0;
    comboFiltrar.selectedIndex = 0;
    root.innerHTML = renderItems(data);
  });

  /* inserir evento de clique "Ver mais" */

  /* Botão "Ver mais" - Cards */
  document.querySelectorAll('.btn-verMais').addEventListener("click", function() {
    console.log("clicou");
  });

});