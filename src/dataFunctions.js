// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

/* Filtragem por Estados */

export const filterData = (data, filterBy, value) => {
  const filterState = data.filter((element) => element.facts[filterBy] === value);
  return filterState;
};

/* Organização AZ */

export const sortData = (data, sortBy, value) => {
  data.sort((a, b) => {
    const placeA = a.name[sortBy].toUpperCase() === value,
      placeB = b.name[sortBy].toUpperCase() === value;
    return placeA === placeB ? 0 : placeA > placeB ? 1 : -1;
  })
};
//     if (placea.name > placeb.name) 
//       return -1
//     else if (placea.name < placeb.name) 
//       return 1
//     return 0
// })
//   return orgData.toSorted();



//   return [];
// };

/* 
para a organização, preciso que o filtro reorganize os 24 itens em ordem alfabética pelo "name"
1) preciso que identifique os nomes dos objetos; - usar querySelector?
2) preciso de um filtro que reorganize, em ordem crescente e decrescente, os itens do banco de dados;
*/
// var myArray = ['three', 'two', 'banana', 'one'];
// myArray.reverse();
// console.log(myArray);

/* const dataAz = data.toSorted((element) => element.name[sortBy] === value);
  console.log(dataAz);
  return dataAz; */