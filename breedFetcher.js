const request = require('request');
const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    callback(error, data); //let the callback handle the results from request
  });
};
module.exports = fetchBreedDescription;