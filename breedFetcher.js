const breed = process.argv[2];

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) console.log('Error: ', error.code);
  else if (body.length === 2) console.log('Error: Breed Not Found');
  else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }

});