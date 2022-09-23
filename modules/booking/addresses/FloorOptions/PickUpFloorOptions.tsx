import { MenuFloorOptions } from '@pd-frontend/modules/booking';
import { useFloorOperations } from '@pd-frontend/modules/booking/hooks';
import { MouseEvent } from 'react';
import styles from './style.module.css';

export const PickUpFloorOptions = (): JSX.Element => {
	const {
		formState,
		setFormState,
		isActiveNo,
		isActiveYes,
		setIsActiveNo,
		setIsActiveYes,
		isSelected,
		selected,
		setSelected
	} = useFloorOperations();

	const setOption = (evt: MouseEvent<HTMLButtonElement>) => {
		const dataOption = evt.currentTarget.getAttribute('data-option') as string;
		const optionText = evt.currentTarget.textContent as string;

		setSelected(optionText);
		setFormState({
			...formState,
			collectionLevelOfService: dataOption ?? undefined
		});
	};

	const handleOnClick = (evt: MouseEvent<HTMLButtonElement>) => {
		const btnValue = evt.currentTarget.getAttribute('data-pick-val') as string;

		if (btnValue === 'true') {
			setIsActiveYes(true);
			setIsActiveNo(false);
		}

		if (btnValue === 'false') {
			setIsActiveNo(true);
			setIsActiveYes(false);
		}

		setFormState({
			...formState,
			collectionIsLiftAvailable: btnValue === 'true'
		});
	};

	return (
		<li className={styles.floor}>
			<h3 className={styles.title} title="Required">
				Choose level of service
				<span className="text-secondary ml-1">*</span>
			</h3>
			<div className={styles['group-col']}>
				<MenuFloorOptions
					isSelected={isSelected}
					selected={selected}
					setOption={setOption}
				/>

				<div className={styles['extra-option']}>
					<h3 className={`${styles.title} ${styles.heading}`}>
						Is there lift available?
					</h3>
					<button
						type="button"
						className={`${styles['btn--option']} ${
							isActiveNo ? styles['btn--active'] : ''
						}`}
						data-pick-val={false}
						aria-label="There's no lift available"
						onClick={handleOnClick}
					>
						No
					</button>
					<button
						type="button"
						className={`${styles['btn--option']} ${
							isActiveYes ? styles['btn--active'] : ''
						}`}
						data-pick-val={true}
						aria-label="There's lift available"
						onClick={handleOnClick}
					>
						Yes
					</button>
				</div>
			</div>
		</li>
	);
};
