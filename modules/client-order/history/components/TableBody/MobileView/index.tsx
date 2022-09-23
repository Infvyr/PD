import {
	Items,
	PackageDetails
} from '@pd-frontend/modules/client-order/history/components';
import { Dynamic } from '@pd-frontend/modules/client-order/history/components/dynamic-export';
import styles from './style.module.css';

const mockArr = [...Array(4).keys()].map((i) => i + 1);

export const MobileView = (): JSX.Element => {
	return (
		<div className={styles.table}>
			{mockArr.map((idx) => (
				<div key={idx} className={styles.tableItem}>
					<div className={styles.rowHeader}>
						<b>Order</b>
						<b>Added Date</b>
						<b>Status</b>
						<b>Items</b>
					</div>
					<div className={styles.rowContent}>
						<span className={styles.text}>252162</span>
						<time className={styles.text} dateTime="01/01/2022">
							01/01/2022
						</time>
						<span className={styles.text}>Scheduled</span>
						<Items />
					</div>

					<div className={`${styles.rowHeader} ${styles.rowHeaderSecond}`}>
						<b>Total</b>
						<b className={`${styles.truncateText} text-center`}>
							Tracking Number
						</b>
						<b className={`${styles.truncateText} text-center`}>
							Payment Status
						</b>
						<b className={`${styles.truncateText} text-center`}>
							Package Details
						</b>
						<b>Invoice</b>
					</div>
					<div className={`${styles.rowContent} ${styles.rowContentSecond}`}>
						<span className={`${styles.text} ${styles.truncateText}`}>
							£53.45
						</span>
						<span
							className={`${styles.text} ${styles.truncateText} text-center`}
						>
							14631000075813221
						</span>
						<span className={`${styles.text} text-center`}>Received</span>
						<PackageDetails />
						<a href="" title="Invoice" className={styles.text}>
							Invoice
						</a>
					</div>

					<Dynamic.TableMoreInfoMobile />
				</div>
			))}
		</div>
	);
};
