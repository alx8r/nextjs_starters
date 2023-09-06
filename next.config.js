/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  './src/intl/i18n.ts'
);

const nextConfig = {}

module.exports = withNextIntl(nextConfig);
