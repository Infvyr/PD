import { PropsWithChildren } from 'react';

export const ButtonGroup = ({ children }: PropsWithChildren): JSX.Element => {
	return (
		<div className="inline-flex items-center flex-wrap gap-2.5 order-3">
			{children}
		</div>
	);
};
