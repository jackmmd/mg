import { readdir } from 'fs/promises';
export async function getFileNamesFromAFolder(folder) {
  try {
    const elements = await readdir(folder, { withFileTypes: true });
    const files = elements
      .filter(dirent => dirent.isFile())
      .map(dirent => dirent.name);
    return files
  } catch (error) {
    console.error('Error get file names from a folder:', error);
  }
}