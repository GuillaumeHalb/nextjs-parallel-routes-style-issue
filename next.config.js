/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "fr",
    domains: [
      {
        defaultLocale: "fr",
        domain: "www.ousoigner.fr",
      },
    ],
    locales: ["fr"],
  },
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
