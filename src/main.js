import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const root = document.querySelector("#root");
const button = document.querySelector("#clear-button");

const comboOrganizar = document.getElementById("order");
comboOrganizar.addEventListener("change", () => {
  console.log("clicou em organizar");
});

const comboFiltrar = document.getElementById("filters");
comboFiltrar.addEventListener("change", () => {
  console.log("clicou no filtrar");
});

root.innerHTML = renderItems(data);

document.addEventListener("DOMContentLoaded", function () {
  const comboFiltrar = document.getElementById("filters");
  const clearButton = document.getElementById("clear-button");
  const comboOrganizar = document.getElementById("order");

  comboFiltrar.addEventListener("change", function () {
    // Aqui você pode aplicar a lógica de filtro com base no estado selecionado
    //1 etapa: chamar a função de filtro no data function. 2 etapa: com o retorno da função, renderizar novamente os cards com uma lista nova (poderia usar o map)
    const selectedState = comboFiltrar.value;
    console.log("Estado selecionado:", selectedState);
  });

  clearButton.addEventListener("click", function () {
    // Aqui você pode limpar o filtro e redefinir a exibição para o estado inicial
    comboFiltrar.selectedIndex = 0; // Voltar para a opção padrão
    console.log("Filtro limpo");
  });

  comboOrganizar.addEventListener("change", function () {
    // Aqui você pode aplicar a lógica de filtro com base na ordenação selecionada
    const selectedState = comboOrganizar.value;
    console.log("Ordernação selecionada:", selectedState);
  });

  clearButton.addEventListener("click", function () {
    // Aqui você pode limpar o filtro e redefinir a exibição para o estado inicial
    comboOrganizar.selectedIndex = 0; // Voltar para a opção padrão
    console.log("Filtro limpo");
  });
});
