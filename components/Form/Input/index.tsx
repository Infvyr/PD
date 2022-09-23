import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	wrapperHeightClassName?: string;
	classNameInput?: string;
	error: string | undefined;
	register: UseFormRegister<any>;
	name: string;
}

export const FormInput = ({
	wrapperHeightClassName = 'h-[67px]',
	classNameInput = '',
	error,
	register,
	name,
	...restProps
}: Props) => {
	return (
		<div className={`flex flex-col ${wrapperHeightClassName}`}>
			<input
				aria-invalid={error ? 'true' : 'false'}
				className={`input ${classNameInput}`}
				{...register(name)}
				{...restProps}
			/>
			{error && <p className="error-message">{error}</p>}
		</div>
	);
};
