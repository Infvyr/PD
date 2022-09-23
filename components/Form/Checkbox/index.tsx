import { InputHTMLAttributes, ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	wrapperHeightClassName?: string;
	wrapperStyles?: string;
	error: string | undefined;
	register: UseFormRegister<any>;
	name: string;
	id: string;
	ariaLabel: string;
	children?: ReactNode;
}

export const FormCheckbox = ({
	wrapperHeightClassName = 'min-h-[40px]',
	wrapperStyles = 'md:mt-4 mb-3 md:mb-6 flex items-center flex-col gap-1',
	error,
	register,
	name,
	id,
	ariaLabel,
	children,
	...restProps
}: Props) => {
	return (
		<div className={`${wrapperStyles} ${wrapperHeightClassName}`}>
			<div className="flex place-content-center gap-2 relative checkbox-wrapper">
				<label
					htmlFor={id}
					className="font-light cursor-pointer leading-none"
					aria-label={ariaLabel}
				>
					<input
						type="checkbox"
						id={id}
						className="custom-checkbox"
						tabIndex={0}
						{...register(name)}
						{...restProps}
					/>
					<span className="checkmark" />

					{children}
				</label>
			</div>

			{error && <p className="error-message">{error}</p>}
		</div>
	);
};
