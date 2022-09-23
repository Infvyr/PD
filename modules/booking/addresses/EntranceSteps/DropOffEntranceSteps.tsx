import { useEntranceOperations } from '@pd-frontend/modules/booking/hooks';
import styles from './style.module.css';

export const DropOffEntranceSteps = (): JSX.Element => {
	const { isActiveNo, isActiveYes, handleOnClick } = useEntranceOperations();

	return (
		<li className="steps">
			<h3 className={styles.title}>Are there any entrance steps?</h3>
			<div className={styles.group}>
				<button
					type="button"
					className={`${styles.btn} ${isActiveNo ? styles['btn--active'] : ''}`}
					data-drop-val="false"
					aria-label="There's no entrance steps"
					onClick={handleOnClick('data-drop-val', 'deliveryEntranceSteps')}
				>
					No
				</button>
				<button
					type="button"
					className={`${styles.btn} ${
						isActiveYes ? styles['btn--active'] : ''
					}`}
					data-drop-val="true"
					aria-label="There are entrance steps"
					onClick={handleOnClick('data-drop-val', 'deliveryEntranceSteps')}
				>
					Yes
				</button>
			</div>
		</li>
	);
};
