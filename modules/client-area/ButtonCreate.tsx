import Link from 'next/link';

type Props = {
	as?: 'link' | 'button';
	customClassName?: string;
};

export const ButtonCreateOrder = ({
	as = 'link',
	customClassName
}: Props): JSX.Element | null => {
	const buttonText = 'Create new order';
	const defaultClassNames =
		'btn btn-sm leading-loose sm:leading-5 font-bold uppercase order-1 flex-align py-1.5. px-6 sm:px-3 sm:max-w-[200px] xxl:max-w-[240px] sm:w-full sm:text-center text-xs lg:text-sm';

	const handleOnClick = () => {
		return;
	};

	return as === 'link' ? (
		<Link href="/client/order/create" passHref>
			<a
				aria-label={buttonText}
				className={`${defaultClassNames} ${customClassName}`}
				title="Create new order"
			>
				{buttonText}
			</a>
		</Link>
	) : (
		<button
			type="button"
			aria-label={buttonText}
			className={`${defaultClassNames} ${customClassName}`}
			onClick={handleOnClick}
		>
			{buttonText}
		</button>
	);
};
