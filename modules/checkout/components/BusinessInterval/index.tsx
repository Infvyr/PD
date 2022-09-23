import Image from 'next/image';
import CalendarIcon from '/public/assets/images/calendar.webp';
import classnames from '@pd-frontend/styles/pages/payment-template.module.css';
import styles from './style.module.css';

type Props = {
	collectionDate: string;
	deliveryDate: string;
};

export const BusinessInterval = ({
	collectionDate,
	deliveryDate
}: Props): JSX.Element => {
	return (
		<div
			className={classnames.input}
			aria-label={`Selected business interval is from ${collectionDate} to ${deliveryDate}`}
			tabIndex={0}
		>
			<div className={styles.wrapper}>
				<div className={styles.icon}>
					<div className={styles.img}>
						<Image
							src={CalendarIcon.src}
							width={CalendarIcon.width}
							height={CalendarIcon.height}
							alt="calendar"
						/>
					</div>
					<b className={styles.b}>BUSINESS</b>
				</div>
				<div className={styles.label}>
					<span className={styles.bar} />
					<p
						className={styles.dates}
					>{`${collectionDate} - ${deliveryDate}`}</p>
				</div>
			</div>
		</div>
	);
};
