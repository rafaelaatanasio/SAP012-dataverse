// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//Preciso que as opções de filtro e organização apareçam em lista:
// document.getElementById("organizer").innerHTML = data.
// document.getElementById("filter").innerHTML = data.


// Função para filtrar os dados
function filterData(data, filterBy, value) {
  return data.filter(item => item[filterBy] === value);
}

// Função para ordenar os dados
function sortData(data, sortBy, sortOrder) {
  return data.sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === 'asc') {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });
}

// Função para calcular estatísticas
//function computeStats(data) {
  //return data.reduce((acc, item) => {
    // Realize seus cálculos estatísticos aqui
//    return acc;
 // }, {});
//}

// Exporta as funções para uso em outros arquivos
export { filterData, sortData };
