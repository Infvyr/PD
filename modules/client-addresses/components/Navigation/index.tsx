import { ReactComponent as SearchIcon } from '/public/assets/images/svg/search.svg';
import styles from './Navigation.module.css';

type Props = {
	title?: string;
	placeholder?: string;
};

export const Navigation = ({
	title = 'Address From',
	placeholder = 'Find Address...'
}: Props): JSX.Element => {
	return (
		<nav className={styles.nav}>
			<label htmlFor="search-collection-address" className={styles.label}>
				<span className={styles['nav-title']}>{title}</span>
				<div className="relative">
					<span className={styles['search-icon']}>
						<SearchIcon className={styles['icon']} />
					</span>
					<input
						id="search-collection-address"
						type="search"
						className={styles.input}
						placeholder={placeholder}
					/>
				</div>
			</label>
		</nav>
	);
};
