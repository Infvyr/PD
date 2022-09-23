import dynamic from 'next/dynamic';
import 'react-phone-input-2/lib/style.css';

const DynamicPhoneInput = dynamic(() => import('react-phone-input-2'), {
	ssr: false
});

type Props = {
	phoneError: string | undefined;
	value: number | string;
	onChange: (value: string) => void;
	inputHeight?: string;
	inputClass?: string;
	errorWrapperHeight?: string;
};

const inputInlineStyles = `
.react-tel-input .flag-dropdown{border-radius: 50%; border: 0}
.react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus{border-radius: 30px;background-color:transparent}
`;

export const PhoneNumberInput = ({
	phoneError,
	onChange,
	value,
	inputHeight = '!h-8',
	inputClass = 'input !pl-10 !w-full !border-0 !rounded-full',
	errorWrapperHeight = 'h-[52px]'
}: Props): JSX.Element => {
	return (
		<div
			className={`flex flex-col relative ${
				phoneError ? errorWrapperHeight : ''
			}`}
		>
			<style>{inputInlineStyles}</style>
			<DynamicPhoneInput
				disableDropdown
				country={'gb'}
				placeholder="Phone"
				preferredCountries={['gb']}
				inputProps={{ required: true }}
				onChange={onChange}
				value={value?.toString()}
				inputClass={`${inputClass} ${inputHeight}`}
				buttonClass="!bg-transparent !border-0"
			/>
			{phoneError && <p className="error-message">{phoneError}</p>}
		</div>
	);
};
