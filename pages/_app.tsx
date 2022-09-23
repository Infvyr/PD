/**
 * Nx will include these packages in the generated package.json
 * Source: https://nextjs.org/docs/messages/sharp-missing-in-production
 * */
import { AuthApi } from '@pd-frontend/api/auth';
import { useRefreshToken } from '@pd-frontend/hooks';
import * as sharp from 'sharp';
import { ReactElement, ReactNode, Suspense, useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ErrorBoundary } from 'react-error-boundary';
import { KEYS } from '@pd-frontend/config/keys';
import { Footer } from '@pd-frontend/layout';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import '@pd-frontend/styles/global.css';

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	const router = useRouter();
	useRefreshToken();

	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>Proovia Delivery</title>
			</Head>
			<ErrorBoundary FallbackComponent={Dynamic.ErrorScreen}>
				<Suspense fallback={<Dynamic.Loader />}>
					{getLayout(<Component {...pageProps} />)}
					{router.pathname === '/maintenance' ? null : <Footer />}
				</Suspense>
			</ErrorBoundary>

			{KEYS.IS_PROD_ENV && <Dynamic.CookieNotice />}
		</>
	);
}

export default CustomApp;
