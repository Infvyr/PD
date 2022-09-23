import { useEntranceOperations } from '@pd-frontend/modules/booking/hooks';
import styles from './style.module.css';

export const PickUpEntranceSteps = (): JSX.Element => {
	const { isActiveNo, isActiveYes, handleOnClick } = useEntranceOperations();

	return (
		<li className="steps">
			<h3 className={styles.title}>Are there any entrance steps?</h3>
			<div className={styles.group}>
				<button
					type="button"
					className={`${styles.btn} ${isActiveNo ? styles['btn--active'] : ''}`}
					data-pick-val="false"
					aria-label="There's no entrance steps"
					onClick={handleOnClick('data-pick-val', 'collectionEntranceSteps')}
				>
					No
				</button>
				<button
					type="button"
					className={`${styles.btn} ${
						isActiveYes ? styles['btn--active'] : ''
					}`}
					data-pick-val="true"
					aria-label="There are entrance steps"
					onClick={handleOnClick('data-pick-val', 'collectionEntranceSteps')}
				>
					Yes
				</button>
			</div>
		</li>
	);
};
