export const KEYS = {
	IS_PROD_ENV: process.env.NODE_ENV == 'production',
	CDN_URL: process.env.NEXT_PUBLIC_PD_CDN_URL,
	BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
	STRIPE_PUBLISHABLE_KEY: process.env
		.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
};
