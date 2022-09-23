import { ReactComponent as DownloadIcon } from '/public/assets/images/svg/download-cloud.svg';
import styles from './style.module.css';

type Props = {
	invoice?: string;
	packageSlip?: string;
	labels?: string;
};

export const OrderPackages = ({
	invoice,
	packageSlip,
	labels
}: Props): JSX.Element => {
	return (
		<ul className={styles.packages}>
			<li>
				<a
					href={invoice}
					className={`group ${styles['package-box']}`}
					title="Download invoice"
					aria-label="Download invoice"
					target="_blank"
					rel="noreferrer nofollow"
				>
					<span className={`group-hover:text-white ${styles['package-title']}`}>
						Invoice
					</span>
					<span className={styles['icon-wrapper']}>
						<DownloadIcon className={`group-hover:fill-white ${styles.icon}`} />
					</span>
				</a>
			</li>
			<li>
				<a
					href={packageSlip}
					className={`group ${styles['package-box']}`}
					title="Download slip"
					aria-label="Download slip"
					target="_blank"
					rel="noreferrer nofollow"
				>
					<span className={`group-hover:text-white ${styles['package-title']}`}>
						Slip
					</span>
					<span className={styles['icon-wrapper']}>
						<DownloadIcon className={`group-hover:fill-white ${styles.icon}`} />
					</span>
				</a>
			</li>
			<li>
				<a
					href={labels}
					className={`group ${styles['package-box']}`}
					title="Download label"
					aria-label="Download label"
					target="_blank"
					rel="noreferrer nofollow"
				>
					<span className={`group-hover:text-white ${styles['package-title']}`}>
						Label
					</span>
					<span className={styles['icon-wrapper']}>
						<DownloadIcon className={`group-hover:fill-white ${styles.icon}`} />
					</span>
				</a>
			</li>
		</ul>
	);
};
