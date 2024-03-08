const fs = require('fs');

let source = process.argv[2];
let destination = process.argv[3];

function copy(source, destination)
{
  fs.readFile(source, 'utf-8', (err, data) => {
    if(!err)
    {
      fs.writeFile(destination, data, (err2, data2) => {
        if(!err2)
        {
          console.log('Copied completed');
        }
      })
    }
  })
}

copy(source, destination);