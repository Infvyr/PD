import { ReactComponent as Smartphone } from '/public/assets/images/svg/smartphone.svg';

type Props = {
	number?: string;
	iconClass?: string;
};

export const Phone = ({
	number = '+44 121 314 2780',
	iconClass
}: Props): JSX.Element => (
	<li className="pb-1.5 pl-7 flex items-center gap-2 border-b-[0.5px] border-primary">
		<span className="rounded-full w-8 h-8 flex-align bg-primary">
			<Smartphone className={iconClass} />
		</span>

		<a
			href={`tel:${number?.replace(/[^+\w]/g, '')}`}
			title={number as string}
			className="text-gray-600 hover-text-primary text-xl"
			aria-label={`Call us at ${number?.replace(/[^+\w]/g, '')}`}
		>
			{number as string}
		</a>
	</li>
);
