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

# Settup project & lint

[nextjs_lint_starter](https://github.com/alx8r/nextjs_lint_starter)

Check rules in **eslintrc** and add missing to your project

# Settup intl ()

https://www.youtube.com/watch?v=pKolfZFW3gs&ab_channel=TuomoKankaanp%C3%A4%C3%A4

```bash
  yarn add next-intl@3.0.0-beta.9
```

_Check last version on website [next-intl](https://next-intl-docs.vercel.app/docs/getting-started/app-router-server-components)_

```bash
  mkdir 'src/app/[locale]' && mkdir src/intl && mkdir src/intl/locales
```

```bash
  mv src/app/*.* src/app/\[locale\] && mv src/app/\[locale\]/*.ico src/app
```

```bash
  echo > src/intl/i18n.ts && echo > src/middleware.ts
```

**i18n.ts**

```
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./locales/${locale}.json`)).default,
}));

```

**middleware.ts**

```
import createMiddleware from 'next-intl/middleware';

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

export default createMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'en'
});
```

**next.config.js**

```
/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  './src/intl/i18n.ts'
);

const nextConfig = {}

module.exports = withNextIntl(nextConfig);
```

**Final step is adding import and change page.tsx and layout.tsx files. Check this files and change them in your project**
