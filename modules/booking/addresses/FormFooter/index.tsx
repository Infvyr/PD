import { Button } from '@pd-frontend/components';
import { FormStore } from '@pd-frontend/modules/booking/features/address-form/main-form.state';
import { useFormAddress } from '@pd-frontend/modules/booking/hooks';
import { useRecoilState } from 'recoil';
import { ReactComponent as ChevronIcon } from '/public/assets/images/svg/chevron-left.svg';
import styles from './style.module.css';

export const FormFooter = (): JSX.Element => {
	const [formState, setFormState] = useRecoilState(FormStore);
	const { handleOnClick } = useFormAddress();
	const isCollectionContinueBtnDisabled = !formState.collectionLevelOfService;
	const isDeliveryContinueBtnDisabled = !formState.deliveryLevelOfService;

	const goToDropOff = () => {
		setFormState({
			...formState,
			isVisiblePickUpAutocomplete: false,
			dropOffInputRef: true
		});
	};

	const setOffDropOff = () =>
		setFormState({ ...formState, dropOffInputRef: false });

	return (
		<footer className={styles.footer}>
			{formState.isVisiblePickUpAutocomplete && (
				<Button
					aria-label="Go to drop off address"
					className={`${styles.btn} ${
						isCollectionContinueBtnDisabled ? styles.disabled : ''
					}`}
					disabled={isCollectionContinueBtnDisabled}
					label="Continue"
					onClick={goToDropOff}
					type="button"
				>
					<ChevronIcon className={styles.icon} />
				</Button>
			)}

			{formState.isVisibleDropOffAutocomplete && (
				<Button
					aria-label="Submit"
					className={`${styles.btn} ${
						isDeliveryContinueBtnDisabled ? styles.disabled : ''
					}`}
					disabled={isDeliveryContinueBtnDisabled}
					label="See prices"
					onFocus={setOffDropOff}
					onClick={handleOnClick}
					type="button"
				/>
			)}
		</footer>
	);
};
