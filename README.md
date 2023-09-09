# Create next.js application

```bash
npx create-next-app@latest
```

1. What is your project named? … eslint-prettier-husky-starter
2. Would you like to use TypeScript? … (Yes)
3. Would you like to use ESLint? … (Yes)
4. Would you like to use Tailwind CSS? … (No)
5. Would you like to use `src/` directory? … (Yes)
6. Would you like to use App Router? (recommended) … (Yes)
7. Would you like to customize the default import alias? … (No)

# Settup project

```bash
node -v > .nvmrc
```

```bash
echo engine-strict=true > .npmrc
```

_Open package.json and past “engines” before “scripts”:_

```
"engines": {
  "node": ">=<your_version>",
  "yarn": ">=<your_version>",
  "npm": "please-use-yarn"
},
```

# Eslint & Prettier

```bash
echo > .eslintrc & echo > .prettierrc & echo > .prettierignore & echo > .eslintignore
```

```bash
yarn add -D eslint-config-airbnb eslint-config-airbnb-typescript
```

```bash
yarn add -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```bash
yarn add -D prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-react
```

**.eslintrc**

```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript",
    "prettier"
  ],
  "plugins": ["prettier"],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "prettier/prettier": "error"
  }
}
```

**.prettierrc**

```
{
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "semi": true,
  "printWidth": 100,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

**.prettierignore & .eslintignore**

```
node_modules/
*.config.js
```

_Open package.json and past to “scripts”:_

```
  "lint": "next lint",
  "prettier": "prettier . --write"
```

# Husky

```bash
yarn add -D husky
```

```bash
npx husky install
```

```bash
npx husky add .husky/pre-commit "yarn lint"
```
