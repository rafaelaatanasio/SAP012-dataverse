/* Filtragem por Estados */

export const filterData = (data, filterBy, value) => {
  const filterState = data.filter((element) => element.facts[filterBy] === value);
  return filterState;
};

/* Organização dos Cards (AZ e ZA) */

export const sortData = (data, sortBy, value) => {
  if (value === "asc") {
    return data.sort((a, b) => {return a[sortBy].name.localeCompare(b[sortBy].name)});
  } else if (value === "desc") {
    return data.sort((a, b) => {return a[sortBy].name.localeCompare(b[sortBy].name)}).reverse();
  } else {
    return data;
  }
};

/* Queria entender se essa lógica de construção faz sentido e como a de cima funciona */
// const orgData = data.toSorted((a, b) => {
//   a.name[sortBy].localeCompare(b.name[sortBy], "pt-br", "") === value;
//   return orgData;
// });
// };

/* Organização ZA */

// export const sortZa = (data, value) => {
//   if (value === "des") {
//     return data.sort((c, d) => {return c.name.localeCompare(d.name)}).reverse();
//   } else {
//     return data.sort((c, d) => {return d.name.localeCompare(c.name)}).reverse();
//   }
// };