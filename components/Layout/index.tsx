import { PropsWithChildren } from 'react';

type Props = {
	cardSize?: 'card-md' | 'card-lg' | string;
	cardStyles?: string;
};

export const ClientLayout = ({
	children,
	cardSize = 'card-lg',
	cardStyles
}: Props & PropsWithChildren): JSX.Element => {
	return (
		<div className="py-12 lg:pt-[62px] lg:pb-[75px] w-full">
			<div className="flex-align">
				<div
					className={`card-client ${cardSize} 2xl:max-w-[1232px] ${
						cardStyles ?? ''
					}`}
				>
					{children}
				</div>
			</div>
		</div>
	);
};
