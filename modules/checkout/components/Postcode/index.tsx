import { ReactComponent as CollectionIcon } from '/public/assets/images/svg/download.svg';
import { ReactComponent as DeliveryIcon } from '/public/assets/images/svg/upload.svg';
import { AddressType } from '@pd-frontend/modules/checkout/components/Postcode/enum';
import classnames from '@pd-frontend/styles/pages/payment-template.module.css';
import styles from './style.module.css';

type Props = {
	type: AddressType;
	postcode: string;
	address: string;
	district: string;
};

export const Postcode = ({
	type,
	postcode,
	address,
	district
}: Props): JSX.Element => {
	let ariaLabel =
		type === AddressType.COLLECTION
			? `Collection address is ${postcode} ${district} ${address}`
			: `Delivery address is ${postcode} ${district} ${address}`;

	return (
		<div className={classnames.input} tabIndex={0} aria-label={ariaLabel}>
			<div className={styles.wrapper}>
				<div className={styles.postcode}>
					<div className={styles.icon}>
						{type === AddressType.COLLECTION ? (
							<CollectionIcon className={styles.svg} />
						) : (
							<DeliveryIcon className={styles.svg} />
						)}
					</div>
					<div className={styles.text}>
						<b className={styles['post-location']}>{postcode}</b>
						<p className={styles['post-location']}>{district}</p>
					</div>
				</div>
				<div className={styles.address} title={address}>
					{address}
				</div>
			</div>
		</div>
	);
};
