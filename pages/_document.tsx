import { KEYS } from '@pd-frontend/config/keys';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

export default class CustomDocument extends Document<{
	styleTags: ReactElement[];
}> {
	render(): JSX.Element {
		return (
			<Html lang="en-GB">
				<Head>
					<link href="https://cdn.proovia.uk" rel="preconnect" />
					<link
						rel="preload"
						href={KEYS.CDN_URL + '/fonts/Calibri.woff2'}
						as="font"
						type="font/woff"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href={KEYS.CDN_URL + '/fonts/Calibri-Bold.woff2'}
						as="font"
						type="font/woff"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href={KEYS.CDN_URL + '/fonts/Calibri-Light.woff2'}
						as="font"
						type="font/woff"
						crossOrigin="anonymous"
					/>
					{this.props.styleTags}
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
