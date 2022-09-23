import { FormInput } from '@pd-frontend/components';
import { UseFormRegister } from 'react-hook-form';
import styles from '@pd-frontend/styles/pages/additional-details-template.module.css';

type Props = {
	register: UseFormRegister<any>;
	fieldErrors: {
		referenceLabelError?: string;
	};
};

export const ReferenceLabel = ({
	register,
	fieldErrors: { referenceLabelError }
}: Props): JSX.Element => (
	<div className="w-full">
		<FormInput
			wrapperHeightClassName="h-11"
			name="referenceLabel"
			type="url"
			register={register}
			error={referenceLabelError}
			className={styles.input}
			placeholder="Reference label"
			aria-label="Paste here your"
		/>
	</div>
);
