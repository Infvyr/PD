// const isProd = process.env.NODE_ENV === 'production';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/

const securityHeaders = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on'
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block'
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN'
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff'
	}
];

const nextConfig = {
	nx: {
		svgr: true
	},
	reactStrictMode: true,
	images: {
		domains: ['cdn1.iconfinder.com', 'dummyimage.com', 'cdn.proovia.uk']
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: securityHeaders
			}
		];
	}
};

module.exports = withNx(nextConfig);
