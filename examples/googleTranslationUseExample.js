/*
 * @Author: Pablo Benito <pelicanorojo> bioingbenito@gmail.com
 * @Date: 2025-01-22T11:37:40-03:00
 * @Last modified by: Pablo Benito <pelicanorojo>
 * @Last modified time: 2025-01-23T08:42:28-03:00
 */


// expected ENVS: ITSME, GOOGLE_APPLICATION_CREDENTIALS, GCP_PROJECT_ID, GCP_LOCATION
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

import {init, translateText} from '../packages/googleTranslationUse/index.js';//point correctly here depending on your folder structure.
//*/
const env = process.env;

const config = init({
  projectId: env.GCP_PROJECT_ID,
  location: env.GCP_LOCATION
});

const contents =  ['buenos días, como anda?', 'Yo muy bien, y usted?'];
const result = await translateText({contents, config});
console.log('Text to translate: ', JSON.stringify(contents, null, '\t'))
console.log('Translations:', JSON.stringify(result.response.translations, null, '\t'));
