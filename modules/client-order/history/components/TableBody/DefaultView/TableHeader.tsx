import styles from './TableHeader.module.css';

export const TableHeader = (): JSX.Element => (
	<header className={styles.header}>
		<b className={styles.label}>Order</b>
		<b className={`${styles.label} ${styles.text}`}>Added Date</b>
		<b className={`${styles.label} ${styles.text}`}>Status</b>
		<b className={`${styles.label} ${styles.items}`}>Items</b>
		<b className={styles.label} />
		<b className={styles.label}>Total</b>
		<b className={`${styles.label} ${styles.text}`}>Tracking Number</b>
		<b className={`${styles.label} ${styles.text}`}>Payment Status</b>
		<b className={`${styles.label} ${styles.text}`}>Package Details</b>
		<b className={`${styles.label} ${styles.text}`}>Invoice</b>
	</header>
);
