import { ReactComponent as EnvelopeIcon } from '/public/assets/images/svg/mail.svg';

type Props = {
	mail?: string;
	iconClass?: string;
};

export const Mail = ({
	mail = 'businesscustomers@proovia.co.uk',
	iconClass
}: Props): JSX.Element => (
	<li className="flex-align gap-2 py-1.5 border-b-[0.5px] border-primary">
		<span className="rounded-full w-8 h-8 flex-align bg-primary">
			<EnvelopeIcon className={iconClass} />
		</span>
		<a
			href={`mailto:${mail as string}`}
			title={mail as string}
			className="text-gray-600 hover-text-primary lowercase w-8/12 whitespace-nowrap overflow-hidden text-ellipsis text-[11px] md:text-base"
			aria-label={`Mail us at ${mail}`}
		>
			{mail as string}
		</a>
	</li>
);
