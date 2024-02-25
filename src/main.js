import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const root = document.querySelector("#root");
root.innerHTML = renderItems(data);

document.addEventListener("DOMContentLoaded", function () {
  const comboFiltrar = document.getElementById("filters");
  const clearButton = document.getElementById("clear-button");
  const comboOrganizar = document.getElementById("order");

  comboFiltrar.addEventListener("change", (event) => {
    // Aqui você pode aplicar a lógica de filtro com base no estado selecionado
    //1 etapa: chamar a função de filtro no data function. 2 etapa: com o retorno da função, renderizar novamente os cards com uma lista nova (poderia usar o map)
    const selectedState = filterData(data, "brState", event.target.value);
    console.log("Estado selecionado:", selectedState);
    root.innerHTML = renderItems(selectedState);
  });

  comboOrganizar.addEventListener("change", function () {
    // Aqui você pode aplicar a lógica de filtro com base na ordenação selecionada
    const selectedState = comboOrganizar.value;
    console.log("Ordenação selecionada:", selectedState);
  });


  //posso adicionar um evento que retorne o filtro e a organização para o estado inicial?
  clearButton.addEventListener("click", function () {
    // Aqui você pode limpar o filtro e redefinir a exibição para o estado inicial
    comboFiltrar.selectedIndex = 0; // Voltar para a opção padrão
    console.log("Filtro limpo");
  });

  clearButton.addEventListener("click", function () {
    // Aqui você pode limpar o filtro e redefinir a exibição para o estado inicial
    comboOrganizar.selectedIndex = 0; // Voltar para a opção padrão
    console.log("Filtro limpo");
  });
});
