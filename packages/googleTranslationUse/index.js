/*
 * @Author: Pablo Benito <pelicanorojo> bioingbenito@gmail.com
 * @Date: 2025-01-23T01:49:21-03:00
 * @Last modified by: Pablo Benito <pelicanorojo>
 * @Last modified time: 2025-01-23T08:19:26-03:00
 */


// Imports the Google Cloud Translation library
// TIP: I point on the .env, to the GOOGLE_APPLICATION_CREDENTIALS using an alias
// GOOGLE_APPLICATION_CREDENTIALS=GOOGLE_APPLICATION_CREDENTIALS
import { TranslationServiceClient } from '@google-cloud/translate';

// Instantiates a client
export const init = ({projectId, location = 'global', sourceLan = 'es', targetLan = 'en', mimeType = 'text/plain'})  => ({
  projectId, location, sourceLan, targetLan,  mimeType,
  client: new TranslationServiceClient()
});


export async function translateText({contents, config}) {
  // Construct request
  const request = {
    parent: `projects/${config.projectId}/locations/${config.location}`,
    contents: contents,
    mimeType: config.mimeType, // mime types: text/plain, text/html
    sourceLanguageCode: config.sourceLan,
    targetLanguageCode: config.targetLan
  };

  // Run request, requestEcho and rawResponse arent populated always.
  const [response, requestEcho, rawResponse] = await config.client.translateText(request);

  return {
    response, requestEcho, rawResponse
  };
}
