import { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
	title?: string;
	description?: string;
	children?: ReactNode;
};

export const CustomHead = ({
	title = '',
	description,
	children
}: Props): JSX.Element => {
	return (
		<Head>
			<title>{`Proovia Delivery ${title && `- ${title}`}`}</title>
			{description && <meta name="description" content={description} />}
			{children}
		</Head>
	);
};
