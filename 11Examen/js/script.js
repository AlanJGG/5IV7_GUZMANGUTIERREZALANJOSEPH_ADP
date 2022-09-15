const publicKey = 'fa417bb8131e024cf903657007be8182',
      privateKey = '93e0ca0809630a612d74d8162d973296ee2844d9';
const marvel = {
        render: () => {
                const urlAPI = 'https://gateway.marvel.com/v1/public/characters/ts=1&apikey=fa417bb8131e024cf903657007be8182&hash=9c8983bc0d03665c9800dfa9113fb160';
                const container = document.querySelector('#marvel-container');
                let contentHTML = '';
      
                fetch(urlAPI)
                .then(res => res.json())
                .then((json) => {

                for (const hero of json.data.results) {
                let urlHero = hero.urls[0].url;
                contentHTML += `
                  <div class="col-md-4">
                      <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                      </a>
                      <h3 class="title">${hero.name}</h3>
                  </div>`;
              }
              container.innerHTML = contentHTML;
            }) .catch((error) => ({requestFailed: true}));
        }
};

marvel.render();
