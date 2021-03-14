const input = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
console.log(input)


request(input[0], (error, response, body) => {
  if(error) {console.log('error:', error)}; // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(input[1], body, () => {
    let stats = fs.statSync(input[1])
    console.log(`Downloaded and saved ${stats.size} bytes to ${input[1]}`);
  });
});