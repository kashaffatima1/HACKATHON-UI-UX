/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
 };

 module.exports = nextConfig;



// /** @type {import('next').NextConfig} */
// import NextConfig from "next" // Import the correct type

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["cdn.sanity.io"],
//   },
// };

// module.exports = {
//   webpack(config: any) {
//     config.resolve.fallback = {
//       fs: false,
//       path: false,
//       os: false,
//     };
//     return config;
//   },
// };
