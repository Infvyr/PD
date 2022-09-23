import { Button } from '@pd-frontend/components';

type Props = {
	isSubmitting: boolean;
	isValid: boolean;
};
export const Footer = ({ isSubmitting, isValid }: Props): JSX.Element => {
	return (
		<footer className="text-center">
			<Button
				aria-label="Complete order"
				label="Completed!"
				className={`btn btn-sm justify-center gap-x-1 mx-auto`}
				isLoading={isSubmitting}
				isValid={isValid}
				disabled={isSubmitting || !isValid}
			/>
		</footer>
	);
};
