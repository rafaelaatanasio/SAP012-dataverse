// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

/* Filtragem por Estados */

export const filterData = (data, filterBy, value) => {
  const filterState = data.filter((element) => element.facts[filterBy] === value);
  return filterState;
};

/* Organização AZ */

/*
uso o sort ou o to Sorted para organizar;
uso o localeCompare para hierarquizar alfabeticamente
*/

export const sortAz = (data, sortBy, value) => {
  const orgData = data.toSorted((a, b) => {
    a.name[sortBy].localeCompare(b.name[sortBy], "pt-br", "") === value;
    return orgData;
  });
};

//     if (placea.name > placeb.name) 
//       return -1
//     else if (placea.name < placeb.name) 
//       return 1
//     return 0
// })

/* localeCompare() usa-se para strings 
/* 

/* Organização ZA */

/*
uso o reverse para inverter a ordem no resultado da organização AZ
*/

export const sortZa = (data, sortBy, value) => {
  
}

// var myArray = ['three', 'two', 'banana', 'one'];
// myArray.reverse();
// console.log(myArray);