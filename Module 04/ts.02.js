'use strict';

const form = document.getElementById('searchForm');
const input = document.getElementById('query');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const searchText = input.value.trim();

  if (searchText === '') {
    console.log('Please enter a TV show name.');
    return;
  }

  const url = 'https://api.tvmaze.com/search/shows?q=' + encodeURIComponent(searchText);

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log('Search results for:', searchText);
      console.log(data);
    })
    .catch(function(error) {
      console.log('Error fetching TV data:', error);
    });
});