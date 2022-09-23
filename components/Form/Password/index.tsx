import { EyeToggle } from '@pd-frontend/components';
import { useToggle } from '@pd-frontend/hooks/useToggle';
import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	wrapperHeightClassName?: string;
	classNameInput?: string;
	error: string | undefined;
	register: UseFormRegister<any>;
	name: string;
}

export const FormPasswordInput = ({
	wrapperHeightClassName = 'h-[67px]',
	classNameInput = '',
	error,
	register,
	name,
	...restProps
}: Props): JSX.Element => {
	const { isVisible, handleOnChange } = useToggle();

	return (
		<div className={`flex flex-col ${wrapperHeightClassName}`}>
			<div className="relative">
				<input
					aria-invalid={error ? 'true' : 'false'}
					className={`input pr-12 ${classNameInput}`}
					type={isVisible ? 'text' : 'password'}
					{...register(name)}
					{...restProps}
				/>
				<EyeToggle isVisible={isVisible} toggleVisibility={handleOnChange} />
			</div>
			{error && <p className="error-message">{error}</p>}
		</div>
	);
};
