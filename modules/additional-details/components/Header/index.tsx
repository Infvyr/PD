import { IconButton } from '@pd-frontend/components';
import { ReactComponent as CheckIcon } from '/public/assets/images/svg/check.svg';
import styles from './style.module.css';

export const PageHeader = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Additional Details</h1>
			<div className={styles.steps}>
				<IconButton
					ariaLabel="First step: payment"
					icon={<CheckIcon />}
					tabIndex={-1}
					style={{ cursor: 'default' }}
				/>
				<hr className={styles.hr} />
				<IconButton
					ariaLabel="Second step: additional details"
					text="2"
					tabIndex={-1}
					style={{ cursor: 'default' }}
				/>
			</div>
		</header>
	);
};
