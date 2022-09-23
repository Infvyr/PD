import { Button } from '@pd-frontend/components';
import { CollectionAddressContext } from '@pd-frontend/modules/client-addresses/context/AddressContext';
import { delay } from '@pd-frontend/utils/delay';
import { useContext } from 'react';
import styles from './ListOfAddressFooter.module.css';

export const CollectionFooter = (): JSX.Element => {
	const { collectionAddress, setCollectionAddress } = useContext(
		CollectionAddressContext
	);

	const setDefaultCollectionAddress = async () => {
		try {
			await delay(800, 'Set successfully collection address');
		} catch (err) {
			console.error(err);
		}
	};

	const removeDefaultAddress = (id: number) => async () => {
		try {
			if (setCollectionAddress) {
				setCollectionAddress(undefined);
				await delay(800, 'Removed default collection address');
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<footer className={styles.footer}>
			<Button
				aria-label="Set default collection address"
				label="Set default collection Address"
				type="button"
				className={`btn btn-sm btn-outline ${styles['button-set']}`}
				disabled={!collectionAddress}
				wrapperStyles="w-full"
				onClick={setDefaultCollectionAddress}
			/>
			<Button
				aria-label="Remove default collection address"
				label="Remove default"
				type="button"
				className={`btn btn-sm ${styles['button-remove']} ${
					collectionAddress ? '' : `btn-ghost ${styles.disabled}`
				}`}
				disabled={!collectionAddress}
				wrapperStyles="w-full"
				onClick={removeDefaultAddress(collectionAddress as number)}
			/>
		</footer>
	);
};
