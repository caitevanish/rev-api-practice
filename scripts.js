const displayContainer = document.querySelector('.display');

//Old school AJAX request

const getImageData = function (artObjectId) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artObjectId}`
  );
  request.send();

  //once data arrives...
  //register a callback on the load:
  request.addEventListener('load', function () {
    // console.log(this.responseText);

    const data = JSON.parse(this.responseText);
    console.log(data);

    const html = `<div>
      <h3 id="artTitle">${data.title}</h3>
      <img id="artMainImage" src="${data.primaryImageSmall}" alt="artwork" />
      <h4 id="artistName">${data.artistDisplayName}</h4>
      <p id="dim">${data.dimensions}</p>
      <p id="medium">${data.medium}</p>
      <p id="classif">${data.classification}</p>
      <p id="nation">${data.artistNationality}</p>
      <a id="wikiLink" href="">${data.objectWikidata_URL}</a>
    </div> `;
    displayContainer.insertAdjacentHTML('beforeend', html);
  });
};
getImageData('436533');
