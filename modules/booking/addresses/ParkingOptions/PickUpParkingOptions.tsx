import { ParkingAvailability } from '@pd-backend/types';
import { FormStore } from '@pd-frontend/modules/booking/features/address-form/main-form.state';
import { useParkingOptions } from '@pd-frontend/modules/booking/hooks';
import { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import styles from './style.module.css';

export const PickUpParkingOptions = (): JSX.Element => {
	const [formState, setFormState] = useRecoilState(FormStore);
	const {
		isActiveNo,
		isActiveOutside,
		isActiveOnStreet,
		isActiveNearby,
		makeButtonActive
	} = useParkingOptions();

	const handleOnClick = (evt: MouseEvent<HTMLButtonElement>) => {
		const btnValue = evt.currentTarget.getAttribute('data-pick-val');

		makeButtonActive(btnValue as string);

		if (btnValue) {
			setFormState({
				...formState,
				collectionParking: btnValue
			});
		}
	};

	return (
		<li className={styles.parking}>
			<h3 className={styles.title}>Is parking available?</h3>
			<div className={styles.btns}>
				<button
					type="button"
					className={`${styles.btn} ${styles.max} ${
						isActiveNo ? styles['btn--active'] : ''
					}`}
					data-pick-val={ParkingAvailability.NO}
					aria-label="There's no parking available"
					onClick={handleOnClick}
				>
					No
				</button>
				<button
					type="button"
					className={`${styles.btn} ${styles.outside} ${
						isActiveOutside ? styles['btn--active'] : ''
					}`}
					data-pick-val={ParkingAvailability.SPACE_OUTSIDE}
					aria-label="Parking outside"
					onClick={handleOnClick}
				>
					Space outside
				</button>
				<button
					type="button"
					className={`${styles.btn} ${styles.street} ${
						isActiveOnStreet ? styles['btn--active'] : ''
					}`}
					data-pick-val={ParkingAvailability.ON_STREET}
					aria-label="Parking on street"
					onClick={handleOnClick}
				>
					On street
				</button>
				<button
					type="button"
					className={`${styles.btn} ${styles.nearby} ${styles.max} ${
						isActiveNearby ? styles['btn--active'] : ''
					}`}
					data-pick-val={ParkingAvailability.NEARBY}
					aria-label="Parking nearby"
					onClick={handleOnClick}
				>
					Nearby
				</button>
			</div>
		</li>
	);
};
