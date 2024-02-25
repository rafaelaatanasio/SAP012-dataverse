// // Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  const result = data.filter((element) => element.facts[filterBy] === value);
  return result;
};
// export const sortData = () => {
//   return [];
// };

/* para o filtro, preciso:
1) declarar uma variável que indique onde está o elemento a ser buscado;
2) usar um filtro que, quando a opção do estado for selecionada, ele retorne um novo array contendo apenas os locais dentro do estado selecionado

usar filter, mas como? armazeno em uma variável 

para a organização, preciso que o filtro reorganize os 24 itens em ordem alfabética por nome
1) preciso que identifique os nomes dos objetos;
2) preciso de um filtro que reorganize, em ordem crescente e decrescente, os itens do banco de dados;



const filterState = ${item.facts.brState};
if (condition) {
    
} else {
    
}
*/