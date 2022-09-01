const breed = process.argv.slice(2);
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) console.log("REQUEST FAILED ", error);
  if (body === '[]') return console.log("Breed not found");
  const data = JSON.parse(body);
  return console.log(data);
});