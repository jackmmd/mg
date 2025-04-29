import { readdir } from 'fs/promises';
export async function getFolderNamesFromAFolder(folder) {
  try {
    const files = await readdir(folder, { withFileTypes: true });
    const folder_names = files
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    return folder_names;
  } catch (error) {
    console.error('Error get folder names from a folder', error);
  }
}
