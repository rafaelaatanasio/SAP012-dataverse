export const renderItems = (data) => {
  console.log(data);
  // OH coletiva Moni
  // return `<ul>
  // <li>card1</li>
  // <li>card2</li>
  //`;

  //usar loop para inserir os dados
  // map, for, forEach
  // criar uma variável que vai armazenar a nossa string final
  // loop para add cada card
  // retornar variável criada
  // let resultado = "<ul>"
  // loop para adicionar os <li> dos cards:
  // data.forEach((elemento) => console.log(name.elemento));
  // data.forEach((elemento) => {
  // resultado += `
  //<li>
  //<h1>${elemento.name}</h1>
  //<img src=${elemento.imageUrl}>
  //<div>${elemento.facts.birth}</div>
  //</li>
  //`
  //)}
  // no final adicionar o fechamento da <ul>:
  // let resultado - resultado + "</ul>"

  // Outra lógica, dessa vez usando forEach. Porém, não aparece.
  // const cardsContent = document.querySelectorAll('#root .content');
  //   cardsContent.forEach((place) => {
  //     place.innerHTML = `
  //   <ul itemscope itemtype="https://schema.org/TouristTrip">
  //     <li class="presentation" itemscope itemtype:"${place.id}">
  //     <section class="basic-infos">
  //     <img itemprop="imageUrl" src="${place.imageUrl}" alt="${place.name}">
  //     <h2 itemprop="name">${place.name}</h2>
  //     <h3 itemprop="brState">${place.facts.brState}</h3>
  //     <p itemprop="bestActivities">${place.facts.bestActivities}</p>
  //      <button onclick="maisInfos()">+ Infos</button>
  //      </section>
  //      <section class="mais-infos" id="infos-${place.id}">
  //      
  //     </li>
  //   </ul>
  //     `;
  //   })




  // document.querySelectorAll('#root .content').textContent = data.map((place) => `
  // <ul itemscope itemtype="https://schema.org/TouristTrip">
  //   <li itemscope itemtype: "https://schema.org/ListItem">
  //   <h2>${place.name}</h2>
  //   <h3>${place.facts.brState}</h3>
  //   <p>${place.facts.bestActivities}</p>
  //   <a href="#">+ Infos</a>
  //   </li>
  //   </ul>
  //   `)

  //console.log(cards);

  //   const placeImg = 
  //   const placeName
  //   const placeLocation
  //   const placeActivities
  //   const placeInfos

  //   //Tentei construir um código usando microdados para puxar as infos de dataset.js e colocar dentro do html, para que possam aparecer na página. Porém, ainda não entendi muito bem como fazer. Fia mais para entender a lógica.
  //   document.getElementById("root").innerHTML = data.map((places) => {
  //     return {`
  //       imageUrl: places.imageUrl,
  //       name: places.name,
  //       brState: places.facts.brState,
  //       bestActivities: places.facts.bestActivities`
  //   }
  //   })
};

// Outra possibilidade de código
// document.getElementById("root")
//const cardsContainer = document.getElementById("root");

// Aqui, todo o conteúdo do banco de dados apareceu no primeiro card.. Mas pelo menos apareceu
// document.querySelector('#root .container').innerHTML = data.map((place) => `
//   <ul itemscope itemtype="https://schema.org/TouristTrip">
//     <li itemprop="itemListElement" itemscope itemtype: "https://schema.org/ListItem">
//     <img src=${place.imageUrl}>
//     <h2>${place.name}</h2>
//     <h3>${place.facts.brState}</h3>
//     <p>${place.facts.bestActivities}</p>
//     <meta itemprop="position" content="3" />
//     </li>
//     </ul>
//     `)

//return 'example';