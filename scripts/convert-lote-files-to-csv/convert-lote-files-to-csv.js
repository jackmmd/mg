import {  getFileNamesFromAFolder } from '../get-file-names-from-a-folder.js'
import {  getFolderNamesFromAFolder } from '../get-folder-names-from-a-folder.js'
import { convetrpaces12xnCsv } from '../convert-spaces-12xn-csv.js';

const folder_path = "D:/lotes";
const folder_path_des = "D:/lotes-csv"
const folder_names = await getFolderNamesFromAFolder(folder_path);
const promises = folder_names.map(async folder => {
    return {
        folder,
        files: await getFileNamesFromAFolder(`${folder_path}/${folder}`)
    };
});

const results = await Promise.all(promises);
results.map(lote=>{
    lote.files.forEach(file=>{
        const file_path = `${folder_path}/${lote.folder}/${file}`
        const file_path_dest = `${folder_path_des}/${lote.folder}/${file}`
        convetrpaces12xnCsv(file_path,file_path_dest)
    })
})