const fs = require('fs')

async function readFile(path) {
    return new Promise((resolve, reject) => {
      let content = '';
  
      const stream = fs.createReadStream(path, { encoding: 'utf8' });
  
      stream.on('data', chunk => {
        content += chunk;
      });
  
      stream.on('error', err => {
        reject(err);
      });
  
      stream.on('end', () => {
        resolve(content);
      });
    });
  }
  
  module.exports = { readFile }