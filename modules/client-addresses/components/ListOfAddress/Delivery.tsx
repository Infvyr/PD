import { DeliveryFooter } from '@pd-frontend/modules/client-addresses/components';
import { useState } from 'react';
import { ReactComponent as StarIcon } from '/public/assets/images/svg/star-a.svg';
import styles from './ListOfAddress.module.css';
import { DeliveryAddressContext } from '../../context/AddressContext';

const DeliveryAddresses = (): JSX.Element => {
	const [favourite, setFavourite] = useState<number[]>([]);
	const [deliveryAddress, setDeliveryAddress] = useState<number>();

	const addresses = [...Array(50).keys()].map((i) => ({
		key: i + 1,
		address: 'SA4 4HN, SWANSEA, 1 Ffordd Talfan'
	}));

	const setAsFavourite = (id: number) => () => {
		setFavourite([...favourite, id]);
	};

	const throwAddressId = (id: number) => () => {
		setDeliveryAddress(id);
	};

	return (
		<DeliveryAddressContext.Provider
			value={{ deliveryAddress, setDeliveryAddress }}
		>
			<div className={styles.list}>
				<div className={`no-scrollbar ${styles.wrapper}`}>
					{addresses.map(({ address, key }) => (
						<div key={key} className={styles['list-item']}>
							<label
								htmlFor={`delivery-address-${key}`}
								className={styles.label}
							>
								<div className={styles.radio}>
									<input
										type="radio"
										id={`delivery-address-${key}`}
										name="defaultDeliveryAddress"
										checked={deliveryAddress === key}
										onChange={throwAddressId(key)}
									/>
									<span className={styles.radiomark} />
								</div>
								{address}
							</label>
							<button
								type="button"
								aria-label="Set as favourite address"
								onClick={setAsFavourite(key)}
							>
								<StarIcon
									className={`${styles.star} ${
										favourite.indexOf(key) >= 0 ? 'star-a isActive' : 'star-a'
									}`}
								/>
							</button>
						</div>
					))}
				</div>
			</div>
			<DeliveryFooter />
		</DeliveryAddressContext.Provider>
	);
};

export default DeliveryAddresses;
