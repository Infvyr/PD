import { Button } from '@pd-frontend/components';
import { useFormAddress } from '@pd-frontend/modules/booking/hooks';
import { Toaster } from 'react-hot-toast';

export const GoToBooking = (): JSX.Element => {
	const { isDisabled, handleOnClick } = useFormAddress();

	return (
		<>
			<Button
				aria-label="Submit"
				label="See prices"
				className={`btn uppercase mt-2.5 mb-5 ${
					isDisabled ? 'btn-ghost cursor-not-allowed hover:bg-none' : ''
				}`}
				disabled={isDisabled}
				onClick={handleOnClick}
			/>
			<Toaster position="bottom-left" reverseOrder={false} />
		</>
	);
};
