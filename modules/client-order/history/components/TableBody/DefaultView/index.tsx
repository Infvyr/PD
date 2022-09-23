import { Disclosure } from '@headlessui/react';
import {
	Items,
	PackageDetails,
	TableHeader,
	TableMoreInfoDefault
} from '@pd-frontend/modules/client-order/history/components';
import { toPounds } from '@pd-frontend/utils/price-format';
import { Dynamic } from '@pd-frontend/modules/client-order/history/components/dynamic-export';
import styles from './style.module.css';

const mockArr = [...Array(20).keys()].map((i) => i + 1);

export const DefaultView = (): JSX.Element => {
	return (
		<div className={`no-scrollbar ${styles.table}`}>
			<TableHeader />

			{mockArr.map((idx) => (
				<Disclosure key={idx}>
					{({ open }) => (
						<div
							className={`${styles.item} ${
								idx % 2 === 0 ? 'bg-stone-500' : 'bg-white'
							}`}
						>
							<p>252162</p>
							<time dateTime="01/01/2022" className={styles.text}>
								01/01/2022
							</time>
							<p className={styles.text}>Scheduled</p>
							<Items />

							<TableMoreInfoDefault open={open} />

							<p className={styles.text}>{toPounds(53.45)}</p>
							<p className={styles.text}>14631000075813221</p>
							<p className={styles.text}>Received</p>
							<PackageDetails />
							<a href="" title="Invoice" className={styles.text}>
								Invoice
							</a>

							<Dynamic.DefaultPanel />
						</div>
					)}
				</Disclosure>
			))}
		</div>
	);
};
