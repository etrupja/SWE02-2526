const settings = {
  async: true,
  crossDomain: true,
  url: 'https://imdb236.p.rapidapi.com/api/imdb/top250-movies',
  method: 'GET',
  headers: {
    'x-rapidapi-key': '549e48659amsh88ff09ae2bf498dp16698bjsn532fd8d156b0',
    'x-rapidapi-host': 'imdb236.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

$.ajax(settings).done(function (response) {
  $('#loading').hide();

  response.forEach(function (movie) {
    const card = `
      <div class="movie-card">
        <a href="${movie.url}" target="_blank">
          <img src="${movie.thumbnails[0].url}" alt="${movie.primaryTitle}">
        </a>
        <h3>${movie.primaryTitle}</h3>
        <p>${movie.startYear} &bull; ${movie.runtimeMinutes} min</p>
        <p class="rating">&#9733; ${movie.averageRating}</p>
        <p>${movie.genres.join(', ')}</p>
      </div>
    `;
    $('#movies').append(card);
  });
}).fail(function () {
  $('#loading').text('Failed to load movies.');
});
