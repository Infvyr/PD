import { ReactComponent as CheckIcon } from '/public/assets/images/svg/check.svg';
import { MouseEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';

type Props = {
	register: UseFormRegister<any>;
	error: string | undefined;
	inputValue: string;
};

export const OtpCode = ({ register, error, inputValue }: Props) => {
	const handleOnClick = (evt: MouseEvent<HTMLElement>) => {
		evt.preventDefault();
	};

	return (
		<>
			<div className="flex flex-col h-10">
				<div className="relative">
					{inputValue?.length === 7 && (
						<CheckIcon className="absolute right-3.5 top-2/4 -translate-y-2/4 fill-green-600 animate-fade-in-down" />
					)}
					<input
						type="text"
						maxLength={7}
						className="input h-8 indent-3 pr-10"
						placeholder="Enter the code"
						aria-invalid={error ? 'true' : 'false'}
						{...register('otpCode', { required: true })}
					/>
				</div>
				{error && <p className="error-message">{error}</p>}
			</div>

			<div className="text-center">
				<a
					href="#"
					title="Send the code"
					className="underline text-secondary text-xs lg:text-base hover:text-primary hover:no-underline"
					onClick={handleOnClick}
				>
					Send the code
				</a>
			</div>
		</>
	);
};
