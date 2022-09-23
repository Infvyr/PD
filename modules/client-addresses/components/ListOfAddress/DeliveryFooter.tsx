import { Button } from '@pd-frontend/components';
import { DeliveryAddressContext } from '@pd-frontend/modules/client-addresses/context/AddressContext';
import { delay } from '@pd-frontend/utils/delay';
import { useContext } from 'react';
import styles from './ListOfAddressFooter.module.css';

export const DeliveryFooter = (): JSX.Element => {
	const { deliveryAddress, setDeliveryAddress } = useContext(
		DeliveryAddressContext
	);

	const setDefaultDeliveryAddress = async () => {
		try {
			await delay(800, 'Set successfully delivery address');
		} catch (err) {
			console.error(err);
		}
	};

	const removeDefaultAddress = (id: number) => async () => {
		try {
			if (setDeliveryAddress) {
				setDeliveryAddress(undefined);
				await delay(800, 'Removed default delivery address');
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<footer className={styles.footer}>
			<Button
				aria-label="Set default delivery address"
				label="Set default delivery Address"
				type="button"
				className={`btn btn-sm btn-outline ${styles['button-set']}`}
				disabled={!deliveryAddress}
				wrapperStyles="w-full"
				onClick={setDefaultDeliveryAddress}
			/>
			<Button
				aria-label="Remove default delivery address"
				label="Remove default"
				type="button"
				className={`btn btn-sm ${styles['button-remove']} ${
					deliveryAddress ? '' : `btn-ghost ${styles.disabled}`
				}`}
				disabled={!deliveryAddress}
				wrapperStyles="w-full"
				onClick={removeDefaultAddress(deliveryAddress as number)}
			/>
		</footer>
	);
};
