/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,
	basePath: process.env.CI ? "/portfolio" : "",
};

export default nextConfig;
