/*
 * @Author: Pablo Benito <pelicanorojo> bioingbenito@gmail.com
 * @Date: 2025-01-27T08:58:12-03:00
 * @Last modified by: Pablo Benito <pelicanorojo>
 * @Last modified time: 2025-01-30T01:15:02-03:00
 */


// One file processing
import { readFile, writeFile } from 'node:fs/promises';

import { packOLeaves, unpackOleaves, arrayDistinct, arrayMapFromTransformedDistinct } from '../../packages/POJOArrayMapper/src/index.js';
import { translateText } from '../../packages/googleTranslationUse/index.js';

export async function processFile({sourceFile, destinationFile, jsonPaths, transConfig}) {
  const theJson = await readFile(sourceFile, {encoding: 'utf8'});
  const obj = JSON.parse(theJson);

  const ok = await translateJson({obj, jsonPaths, transConfig});
  // save the final translated json :).
  await writeFile(destinationFile, JSON.stringify(obj, null, '\t'));

  return ok;
}


async function translateJson({obj, jsonPaths, transConfig}) {//NOTE: obj is modefied where jsonPaths points to.

  // using the jsonPaths for construct an object with a flat array (packedOLeaves.p.v) of texts for be translated
  const packedOLeaves = packOLeaves({obj, directPathChains: jsonPaths, addBrokenPaths: false});

  // do the translations of the flat array (only distinct elements).
  const contents = arrayDistinct(packedOLeaves.p.v);
  const result = await translateText({contents, config: transConfig});
  const contentsTrans = result.response.translations.map( t => t.translatedText);

  // populated the packedOLeaves object with the translated flat array
  packedOLeaves.p.v = arrayMapFromTransformedDistinct( packedOLeaves.p.v, contents, contentsTrans);

  
  // unpack the packedOLeaves
  const ok = unpackOleaves({obj, oLeaves: packedOLeaves.l, packedOLeaves: packedOLeaves.p});

  return ok;
}
