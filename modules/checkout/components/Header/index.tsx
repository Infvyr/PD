import { IconButton } from '@pd-frontend/components';
import styles from './style.module.css';

export const PaymentHeader = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Payment</h1>
			<div className={styles.steps}>
				<IconButton
					ariaLabel="First step: payment"
					text="1"
					tabIndex={-1}
					style={{ cursor: 'default' }}
				/>
				<hr className={styles.hr} />
				<IconButton
					ariaLabel="Second step: additional details"
					text="2"
					btnType="outline"
					style={{ color: '#B53133', cursor: 'default' }}
					tabIndex={-1}
				/>
			</div>
		</header>
	);
};
