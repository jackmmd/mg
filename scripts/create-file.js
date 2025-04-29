import fs from 'fs';
import path from 'path';

export function createFile(fileName, data) {
  const dir = path.dirname(fileName);

  fs.mkdir(dir, { recursive: true }, (mkdirErr) => {
    if (mkdirErr) {
      console.log("Error creating directory:", mkdirErr);
      return;
    }

    fs.writeFile(fileName, data, (writeErr) => {
      if (writeErr) {
        console.log("Error creating file:", writeErr);
      } else {
        console.log("File created successfully");
      }
    });
  });
}
