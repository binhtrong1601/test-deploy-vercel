/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STUDENT_API: "http://localhost:8080/api/v1/students",
  },
};

module.exports = nextConfig;
