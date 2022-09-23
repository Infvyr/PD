import { useRouter } from 'next/router';
import { ReactComponent as ChevronLeftIcon } from '/public/assets/images/svg/chevron-left.svg';

type Props = {
	backTo?: string;
};

export const Back = ({ backTo = '/' }: Props): JSX.Element => {
	const router = useRouter();

	const goBack = () => router.push(backTo);

	return (
		<button
			className="w-5 h-5 sm:w-10 sm:h-10 flex-align bg-gradient-to-b text-white rounded-full hover:bg-gradient-to-l"
			aria-label="Go back"
			onClick={goBack}
			type="button"
		>
			<ChevronLeftIcon className="w-4 h-4 sm:w-[unset] sm:h-[unset]" />
		</button>
	);
};
