import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
	boxStyles?: string;
};

export const HeaderLayout = ({ children, boxStyles }: Props): JSX.Element => {
	return (
		<header
			className={`mb-5 flex items-center justify-between flex-wrap gap-y-3 xl:mb-0 ${
				boxStyles ?? ''
			}`}
		>
			{children}
		</header>
	);
};
