/*
 * @Author: Pablo Benito <pelicanorojo> bioingbenito@gmail.com
 * @Date: 2025-01-27T08:52:34-03:00
 * @Last modified by: Pablo Benito <pelicanorojo>
 * @Last modified time: 2025-01-30T01:30:44-03:00
 */


import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

import { fileURLToPath } from 'url';
import path from 'path';
import { makeFolders, listFileNames} from "./utils.js";
import { processFile } from "./process.js";
import { init } from '../../packages/googleTranslationUse/index.js';//point correctly here depending on your folder structure.

await main();

async function main() {
  const env = process.env;

  const transConfig = init({
    projectId: env.GCP_PROJECT_ID,
    location: env.GCP_LOCATION
  });

  // the trick for work with es6 modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);


  const rootFolder = __dirname;
  const sourceFolder =  path.join(rootFolder, 'source');

  const destinationSubfolder = 'dest';
  const destinationFolder = path.join(rootFolder, destinationSubfolder)

  // Chinese: Choose zh-CN (Simplified) for mainland China and Singapore, and zh-TW (Traditional) for Taiwan, Hong Kong, and Macau.
  const destinationLanguages = ['en', 'de']; //, 'pt', 'ja', 'de', 'fr', 'zh-CN']

  await makeFolders({rootFolder, destinationSubfolder, destinationLanguages});

  const fileNames = await listFileNames({folder: sourceFolder});
  const jsonPaths = ['results[].trainingNotes[]', 'results[].workoutName'];


  for (const fileName of fileNames) {
    const sourceFile = path.join(sourceFolder, fileName);

    for (const destinationLanguage of destinationLanguages) {
      const destinationFile = path.join(destinationFolder, destinationLanguage, fileName);
      transConfig.setTargetLan(destinationLanguage);
      await processFile({sourceFile, destinationFile, jsonPaths, transConfig});
    } 

  };
  //await processFile({fileName: '21k-0110-4wobyweek-5months.json', sourceFolder, tempFolder, destinationFolder, jsonPaths, transConfig});
  }
