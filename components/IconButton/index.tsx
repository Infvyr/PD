import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import styles from './IconButton.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: ReactNode;
	ariaLabel: string;
	icon?: ReactElement;
	text?: string;
	isDisabled?: boolean;
	isLoading?: boolean;
	rounded?:
		| 'rounded-full'
		| 'rounded-sm'
		| 'rounded-lg'
		| 'rounded-xl'
		| 'rounded-2xl'
		| 'rounded-3xl';
	btnType?: 'outline' | 'solid';
	btnSize?: 'xs' | 'sm' | 'default' | 'lg';
	hasBadge?: boolean;
	badgeText?: number | string;
};

export const IconButton = ({
	children,
	ariaLabel = 'Button with icon',
	icon,
	text,
	isDisabled = false,
	isLoading = false,
	rounded = 'rounded-full',
	btnType = 'solid',
	btnSize = 'default',
	hasBadge = false,
	badgeText = '',
	...rest
}: ButtonProps): JSX.Element => {
	const renderIcon = icon ?? text;

	return (
		<button
			type="button"
			aria-label={ariaLabel}
			className={`relative ${styles.button} ${rounded} ${
				btnType === 'solid' ? styles.solid : styles.outline
			} ${
				btnSize === 'default'
					? styles.defaultSize
					: btnSize === 'sm'
					? styles.sm
					: btnSize === 'xs'
					? styles.xs
					: styles.lg
			}`}
			disabled={isDisabled}
			{...rest}
		>
			<>
				{renderIcon}
				{hasBadge && <span className={styles.badge}>{badgeText}</span>}
			</>
		</button>
	);
};
