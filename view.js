export const renderItems = (data) => {
  // console.log(data)

  let ul = '<ul>';

  data.forEach((item) => {
    ul += `
      <li itemscope itemtype="Rota dos Sonhos" class="container__card">
        <div class="content__card">
          <dl itemscope itemtype="RoteirosDosSonhos">
            <dt><img src="${item.imageUrl}" alt="Imagem do Destino" itemprop="${item.name}" class="image__card" /></dt>
            <h2 itemprop="name" class="name">${item.name} - ${item.facts.brState}</h2>
            <dd itemprop="sort-order" class="someFeatures">${item.facts.someFeatures}</dd>
            <dd itemprop="itineraryType" class="itineraryType">${item.facts.itineraryType}</dd>
            <dd itemprop="estimatedValue" class="estimatedValue">${item.facts.estimatedValue}</dd>
            <button class='btn-verMais'><dt>Ver mais</dt><dd itemprop="verMais"></dd></button>
          </dl>
        </div>
      </li>
    `;
  });

  ul += "</ul>"
  return ul;
};