import { CollectionFooter } from '@pd-frontend/modules/client-addresses/components';
import { useState } from 'react';
import { ReactComponent as StarIcon } from '/public/assets/images/svg/star-a.svg';
import styles from './ListOfAddress.module.css';
import { CollectionAddressContext } from '../../context/AddressContext';

const CollectionAddresses = (): JSX.Element => {
	const [favourite, setFavourite] = useState<number[]>([]);
	const [collectionAddress, setCollectionAddress] = useState<number>();

	const addresses = [...Array(50).keys()].map((i) => ({
		key: i + 1,
		address: 'AB12 4TT, ABERDEEN, Aberdeen Medals'
	}));

	const setAsFavourite = (id: number) => () => {
		setFavourite([...favourite, id]);
	};

	const throwAddressId = (id: number) => () => {
		setCollectionAddress(id);
	};

	return (
		<CollectionAddressContext.Provider
			value={{ collectionAddress, setCollectionAddress }}
		>
			<div className={styles.list}>
				<div className={`no-scrollbar ${styles.wrapper}`}>
					{addresses.map(({ address, key }) => (
						<div key={key} className={styles['list-item']}>
							<label
								htmlFor={`collection-address-${key}`}
								className={styles.label}
							>
								<div className={styles.radio}>
									<input
										type="radio"
										id={`collection-address-${key}`}
										name="defaultCollectionAddress"
										checked={collectionAddress === key}
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
			<CollectionFooter />
		</CollectionAddressContext.Provider>
	);
};

export default CollectionAddresses;
