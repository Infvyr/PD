import { FormInput, PhoneNumberInput } from '@pd-frontend/components';
import { CustomerDetails } from '@pd-frontend/interfaces/CustomerDetails.interface';
import { Control, Controller, UseFormRegister } from 'react-hook-form';
import styles from './Details.module.css';
import classnames from '@pd-frontend/styles/pages/additional-details-template.module.css';

type Props = {
	fieldErrors: {
		deliveryFullNameError?: string;
		deliveryEmailError?: string;
		deliveryPhoneError?: string;
	};
	register: UseFormRegister<any>;
	control: Control<CustomerDetails> | undefined;
	customerDetails: {
		fullName?: string;
		email?: string;
		phone?: string;
	};
	isVisible: boolean;
	handleOnChange: () => void;
};

export const DeliveryDetails = ({
	register,
	fieldErrors: {
		deliveryFullNameError,
		deliveryEmailError,
		deliveryPhoneError
	},
	control,
	customerDetails,
	isVisible,
	handleOnChange
}: Props): JSX.Element => {
	const { fullName, email, phone } = customerDetails;

	return (
		<div className={styles.items}>
			<div className={styles.heading}>
				<h3 className={styles.title}>Delivery Details</h3>
				<div className="checkbox-wrapper leading-none">
					<label
						htmlFor="delivery"
						className={styles.label}
						aria-label="Check to use customer details"
					>
						<input
							type="checkbox"
							className={`custom-checkbox ${styles['custom-checkbox']}`}
							tabIndex={0}
							id="delivery"
							onChange={handleOnChange}
							checked={isVisible}
						/>
						<span className={`checkmark ${styles.checkmark}`} />
						<span>Same as Customer</span>
					</label>
				</div>
			</div>

			<div className="grid grid-cols-1 xs:grid-cols-3 gap-2">
				<FormInput
					wrapperHeightClassName="h-16"
					name="deliveryFullName"
					placeholder="Full Name"
					type="text"
					register={register}
					error={deliveryFullNameError}
					className={classnames.input}
					defaultValue={isVisible ? fullName : ''}
					disabled={isVisible}
					readOnly={isVisible}
				/>
				<FormInput
					wrapperHeightClassName="h-16"
					name="deliveryEmail"
					placeholder="Email"
					type="email"
					register={register}
					error={deliveryEmailError}
					className={classnames.input}
					defaultValue={isVisible ? email : ''}
					disabled={isVisible}
					readOnly={isVisible}
				/>
				<Controller
					control={control}
					name="deliveryPhone"
					rules={{ required: true }}
					render={({ field: { ref, ...field } }) => (
						<PhoneNumberInput
							{...field}
							phoneError={deliveryPhoneError}
							value={
								isVisible ? (phone as string) : (field.value as number | string)
							}
							onChange={field.onChange}
							inputClass="!input !h-10 !bg-stone-500 shadow-none !rounded-full !border-0 !w-full"
						/>
					)}
				/>
			</div>
		</div>
	);
};
