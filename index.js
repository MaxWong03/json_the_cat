const fetchBreedDescription = require('./breedFetcher');
const breedName = process.argv[2];
fetchBreedDescription(breedName, (error, desc) => { //specifying how the call back will handle the error and description
//here the call back is annonymous
  if (error) console.log('Error fetch details:', error);
  else console.log(desc[0].descrption);
});