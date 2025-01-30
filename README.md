# Translation Toolkit Monorepo (WIP)

A comprehensive monorepo for translation-related tools and utilities.

## Project Structure

```
translation-toolkit/
│
├── packages/
│   ├── google-translation-use/     # Google Translation wrapper
│   └── json-translation-mapper/    # JSON translation mapping tools (soon)
│
├── examples/
│   ├── pojoArrayManagerAndTranslator # a fully functional cli for translate jsons given json paths. not npm ready, should be imported translation-toolkit complete.
│   └── googleTranslationUseExample.js          # Example usage of packages
│
├── pnpm-workspace.yaml
└── package.json
```

## Prerequisites

- Node.js (v20.13.1+)
- pnpm
- Google Cloud Account (for translation services)

## Setup

1. Clone the repository
```bash
git clone https://github.com/pelicanorojo/translation-toolkit.git
cd translation-toolkit
```
2. Install dependencies on the packages 
```bash
pnpm install
```

## Packages

### 1. google-translation-use
A lightweight wrapper for Google Cloud Translation API.

[View Package README](/packages/google-translation-use/README.md)

## Examples
### 1. pojoArrayManagerAndTranslator
This is the reason for this translation-toolkit.

Combines the POJOArrayMapper, for construct first a flat list of leaves properties for translate, and do a distinct computation, for less api use,
 with googleTranslationUse, which does the api request, for the flat arrays of distinct strings for each jsons to translate and each language.
Finally POJOArrayMapper is used again for map the distinct translation onto the OLeaves  nested structure, and the final point
again with POJOArrayMapper is inject back in a copied object, the translated leaves.

Note: the flattening was motivated for use the google translation api contents array input.
Note: the flat distinct computing and reverse map, was motivated, cause one json was past the limit, and this did to work well,
  if the distinct would have failed, then I would need other trick, split the big array with some computation based on the api limits.

## Development

### Installing Dependencies
```bash
# Install dependencies for all packages
pnpm install

# Install dependency to a specific package
pnpm add <package-name> --filter <workspace-package>

# Example
pnpm add lodash --filter google-translation-use
```

### Examples scripts
```bash
#run pnpm install on examples folder
pnpm install

#run one of the scripts on package.json
pnpm run translation-example
```
## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

### Commit Message Convention
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## License

MIT License

## Contact

Pablo Ernesto Benito
- Email: bioingbenito@gmail.com
- GitHub: [@pelicanorojo](https://github.com/pelicanorojo)
