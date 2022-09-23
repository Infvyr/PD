import { ReactComponent as SearchIcon } from '/public/assets/images/svg/search.svg';
import styles from './style.module.css';
import { HTMLProps } from 'react';

type Props = {
	wrapperStyles?: string;
	placeholder?: string;
} & HTMLProps<HTMLInputElement>;

export const SearchInput = ({
	wrapperStyles,
	placeholder,
	...restProps
}: Props): JSX.Element => {
	return (
		<div className={`relative ${wrapperStyles}`}>
			<span className={styles.iconContainer}>
				<SearchIcon className={styles.icon} />
			</span>
			<input
				type="search"
				className={styles.input}
				placeholder={placeholder}
				{...restProps}
			/>
		</div>
	);
};
