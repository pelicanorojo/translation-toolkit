# Google Translation Use

A simple wrapper for Google Cloud Translation API to streamline text translation processes.

## Installation

```bash
npm install google-translation-use
# or
pnpm add google-translation-use
```

## Prerequisites

- Google Cloud account
- Translation API enabled
- Service account credentials

## Setup

1. Create a Google Cloud service account
2. Download the JSON key file
3. Set the environment variable:
   ```bash
   export GOOGLE_APPLICATION_CREDENTIALS=/path/to/your/credentials.json
   ```

## Usage

### Initialization

```javascript
import { init, translateText } from 'google-translation-use';

// Configure translation client
const config = init({
  projectId: 'your-project-id',
  sourceLan: 'es',  // optional, defaults to 'es'
  targetLan: 'en',  // optional, defaults to 'en'
  location: 'global'  // optional
});
```

### Translating Text

```javascript
async function translate() {
  const result = await translateText({
    contents: ['Hello world', 'Good morning'],
    config
  });

  console.log(result.response.translations);
}
```

## Configuration Options

- `projectId`: Your Google Cloud project ID (required)
- `location`: Translation service location (default: 'global')
- `sourceLan`: Source language code (default: 'es')
- `targetLan`: Target language code (default: 'en')
- `mimeType`: Content mime type (default: 'text/plain')

## Supported MIME Types

- `text/plain`
- `text/html`

## Error Handling

Handle potential errors with try/catch:

```javascript
try {
  const translation = await translateText({...});
} catch (error) {
  console.error('Translation failed', error);
}
```

## Language Codes

Use standard ISO 639-1 language codes (e.g., 'en', 'es', 'fr', 'de')

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License

## Author

Pablo Ernesto Benito (pelicanorojo) <bioingbenito@gmail.com>
