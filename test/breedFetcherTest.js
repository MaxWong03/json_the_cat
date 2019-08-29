//breedFetcherTest.js

const fetchBreedDescription = require('../breedFetcher');
const assert = require('chai').assert;

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via call back', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null); //expected no error with this key
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc[0].description.trim());
      done();
    });
  });
  it('returns null when input an invalid breed, via callback',(done) => {
    fetchBreedDescription('gg', (err, desc) => {
      assert.equal(err, null); //expected null here as well because theres shouldnt no error from requesting the api
      assert.deepEqual([], desc);
      // assert.equal(desc, null);
      done();
    });
  });
});