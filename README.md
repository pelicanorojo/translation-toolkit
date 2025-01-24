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
