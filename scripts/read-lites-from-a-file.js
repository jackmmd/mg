import fs from 'fs';
import es from 'event-stream';

export async function readLinesFile(file_path) {
  return new Promise((resolve, reject) => {
    let linesArray = [];

    let s = fs.createReadStream(file_path)
      .pipe(es.split())
      .pipe(es.mapSync(function (line) {
        s.pause();
        linesArray.push(line);
        s.resume();
      }))
      .on('error', function (err) {
        reject(err);
      })
      .on('end', function () {
        resolve(linesArray);
      });
  });
}
export async function readExactFile(path) {
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