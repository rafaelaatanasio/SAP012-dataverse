export const renderItems = (data) => {
  console.log(data)
  //Tentei declarar uma variável para que seja possível modificar a estrutura de <main>;
  //const principal = document.querySelector("[class='main-container']");


  //Tentei construir um código usando microdados para puxar as infos de dataset.js e colocar dentro do html, para que possam aparecer na página. Porém, ainda não entendi muito bem como fazer. Fia mais para entender a lógica.
  document.getElementById("cards").innerHTML = data./*o que colocar aqui?*/.map((item /*declarar aqui o parâmetro, mas qual?*/) => `
  <ul itemscope itemtype="https://schema.org/TouristTrip">
    <li itemprop="itemListElement" itemscope itemtype: "https://schema.org/ListItem">
    <a itemprop="item" href="./data/dataset.js">
    <span itemprop="name"></span></a>
    <meta itemprop="position" content="3" />
    </li>
    `)

  //É preciso construir uma forma de renderizar os objetos para que apareçam na página
  /*< div itemscope >
    <ul>
      <li></li>
    </ul >
  Aquí comienza tu código y puedes retornar lo que tu necesites*/
  return 'example';
};