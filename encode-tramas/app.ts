const fs = require('fs');
const path = require('path');

/**
 * Verifica el formato de salto de línea en un archivo.
 * @param {string} filePath - Ruta del archivo a validar.
 * @returns {Promise<string>} - Retorna el tipo de formato encontrado ('UNIX', 'WINDOWS', 'MAC' o 'DESCONOCIDO').
 */
async function checkFileFormat(filePath: string) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err: Error, data: string) => {
            if (err) {
                return reject(`Error al leer ${filePath}: ${err.message}`);
            }
            if (data.includes('\r\n')) {
                resolve('WINDOWS (CRLF)');
            } else if (data.includes('\r')) {
                resolve('MAC (CR)');
            } else if (data.includes('\n')) {
                resolve('UNIX (LF)');
            } else {
                resolve('DESCONOCIDO');
            }
        });
    });
}

/**
 * Valida el formato de todos los archivos en un directorio.
 * @param {string} dirPath - Ruta del directorio a verificar.
 */
async function validateFilesInDirectory(dirPath: string) {
    try {
        const files = fs.readdirSync(dirPath);

        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const format = await checkFileFormat(filePath);
            console.log(`📄 ${file}: ${format}`);
        }
    } catch (error) {
        console.error('Error al leer el directorio:', error);
    }
}

// Ruta del directorio a analizar
const directoryPath = '/Users/dmondragon/Downloads/lotes/interacion 4';
validateFilesInDirectory(directoryPath);