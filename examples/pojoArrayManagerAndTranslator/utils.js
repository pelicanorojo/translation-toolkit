/*
 * @Author: Pablo Benito <pelicanorojo> bioingbenito@gmail.com
 * @Date: 2025-01-30T01:25:27-03:00
 * @Last modified by: Pablo Benito <pelicanorojo>
 * @Last modified time: 2025-01-30T01:26:39-03:00
 */


import { readdir, mkdir } from 'node:fs/promises';
import path from 'path';

export async function makeFolders({rootFolder, destinationSubfolder, destinationLanguages}) {
  const destinationFolder = path.join(rootFolder, destinationSubfolder)

  await makeFolder(destinationFolder);

  for (const destinationLanguage of destinationLanguages) {
    const languageFolder = path.join(destinationFolder, destinationLanguage);
    await makeFolder(languageFolder);
  }
}

export async function makeFolder(folder) {
  const dirCreation = await mkdir(folder, { recursive: true });
  return dirCreation;
}

export async function listFileNames({folder}) {
  let fileNames = [];
  try {
    const entries = await readdir(folder, { withFileTypes: true });
    fileNames = entries
      .filter(file => file.isFile() && path.extname(file.name) === '.json')
      .map( e => e.name)
    } catch (err) {
    console.error(err);
  } 
  
  return fileNames;
}