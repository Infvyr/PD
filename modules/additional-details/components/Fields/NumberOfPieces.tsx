import { FormInput } from '@pd-frontend/components';
import { UseFormRegister } from 'react-hook-form';
import styles from '@pd-frontend/styles/pages/additional-details-template.module.css';

type Props = {
	register: UseFormRegister<any>;
	fieldErrors: {
		nrOfPiecesError?: string;
	};
};

export const NumberOfPieces = ({
	register,
	fieldErrors: { nrOfPiecesError }
}: Props): JSX.Element => (
	<div className="w-full">
		<FormInput
			wrapperHeightClassName="h-11"
			name="numberOfPieces"
			placeholder="Number of pieces in the order"
			type="number"
			min={1}
			register={register}
			error={nrOfPiecesError}
			className={styles.input}
			aria-label="Enter the number of pieces in the order. The minimum number is 1"
		/>
	</div>
);
