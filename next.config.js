/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STUDENT_API: "http://my_project/api/v1/students",
  },
};

module.exports = nextConfig;
