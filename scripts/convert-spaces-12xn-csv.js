import fs from 'fs'
import es from 'event-stream';
import { createFile } from './create-file.js';
export function convetrpaces12xnCsv(path_read,path_dest){
    var linesArray = []; 
    let end_string = ""
    const s = fs.createReadStream(path_read)
        .pipe(es.split())
        .pipe(es.mapSync(function(line) {
            s.pause(); 
            linesArray.push(line); 
            s.resume();
        }))
        .on('error', function(err) {
            console.log('Error:', err);
        })
        .on('end', function() {
            linesArray.map(i=>{
                let line = ""
                i.split('').map((x,index)=>{
                  line+=`${x}${index!==i.length-1?",":""}` 
                }) 
                line+="\n" 
                end_string += line
            })
            createFile(`${path_dest}.csv`,end_string)
         });
}