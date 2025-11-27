
'use strict';

const form = document.getElementById('search-form');
const input = document.getElementById('query');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const searchTerm = input.value.trim();

  if (searchTerm === '') {
    console.log('Please type a TV series name.');
    return;
  }

  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Search results:', data);

      data.forEach(function (item, index) {
        console.log(
          index + 1,
          item.show.name,
          '-',
          item.show.premiered,
          '-',
          item.show.language
        );
      });
    })
    .catch(function (error) {
      console.log('Error:', error);
    });
});