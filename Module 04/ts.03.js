'use strict';

const form = document.getElementById('searchForm');
const input = document.getElementById('query');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const searchText = input.value.trim();
  const url = 'https://api.tvmaze.com/search/shows?q=' + encodeURIComponent(searchText);

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {

      resultsDiv.innerHTML = '';

      data.forEach(function(tvShow) {

        const article = document.createElement('article');


        const title = document.createElement('h2');
        title.textContent = tvShow.show.name;
        article.appendChild(title);


        const link = document.createElement('a');
        link.href = tvShow.show.url;
        link.target = '_blank';
        link.textContent = 'More details';
        article.appendChild(link);

        const img = document.createElement('img');
        const mediumImg = tvShow.show.image?.medium;  // safe access

        if (mediumImg) {
          img.src = mediumImg;
          img.alt = tvShow.show.name;
          article.appendChild(img);
        }

        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = tvShow.show.summary || 'No summary available';
        article.appendChild(summaryDiv);

        resultsDiv.appendChild(article);
      });
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
});