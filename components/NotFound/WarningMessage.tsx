import { Button } from '@pd-frontend/components';
import { useRouter } from 'next/router';

type Props = {
	message?: string;
	redirectUrl?: string;
	btnText?: string;
};

export const WarningMessage = ({
	message = 'No shopping cart found',
	redirectUrl = '/',
	btnText = 'Go to home page'
}: Props) => {
	const router = useRouter();

	const handleOnClick = () => router.push(redirectUrl);

	return (
		<div className="flex-align flex-col gap-y-5 w-full h-full">
			<h1 className="text-xl">{message}</h1>
			<Button className="btn" label={btnText} onClick={handleOnClick} />
		</div>
	);
};
