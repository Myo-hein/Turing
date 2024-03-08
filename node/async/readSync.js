const fs = require('fs');
let start = new Date();

try {
  const data = fs.readFileSync('hello.txt', 'utf-8');
  const data2 = fs.readFileSync('hello2.txt', 'utf-8');
  let end = new Date();
  let time = end - start;
  console.log('Time ', time);
} catch (err) {
  console.log(err);
}