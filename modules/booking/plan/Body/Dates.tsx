import { Dynamic } from '@pd-frontend/components/dynamic-export';
import styles from '@pd-frontend/modules/booking/plan/Body/dates.module.css';

type Props = {
	collectionDate: string;
	deliveryDate: string;
};

export const Dates = ({ collectionDate, deliveryDate }: Props) => {
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.innerWrapper} ${styles.colWrapper}`}>
				<span className={styles.label}>Collection Date</span>
				<time dateTime={collectionDate} className={styles.time}>
					{collectionDate ? (
						collectionDate
					) : collectionDate === undefined ? (
						'-'
					) : (
						<Dynamic.Shimmer wrapperStyles={styles.shimmer} />
					)}
				</time>
			</div>
			<div className={`${styles.innerWrapper} ${styles.delWrapper}`}>
				<span className={styles.label}>Delivery Date</span>
				<time dateTime={deliveryDate} className={styles.time}>
					{deliveryDate ? (
						deliveryDate
					) : deliveryDate === undefined ? (
						'-'
					) : (
						<Dynamic.Shimmer wrapperStyles={styles.shimmer} />
					)}
				</time>
			</div>
		</div>
	);
};
