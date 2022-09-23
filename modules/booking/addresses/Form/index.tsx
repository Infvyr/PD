import { AddressSuggestion } from '@pd-backend/types';
import { KEYS } from '@pd-frontend/config/keys';
import { FormStore } from '@pd-frontend/modules/booking/features/address-form/main-form.state';
import { useFetchAddress } from '@pd-frontend/modules/booking/hooks';
import { Loader } from '@pd-frontend/components';
import { RefObject, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { ReactComponent as CloseIcon } from '/public/assets/images/svg/x.svg';
import { Dynamic } from '@pd-frontend/modules/booking/dynamic-export';
import styles from './style.module.css';

export const AddressForm = (): JSX.Element => {
	const [formState, setFormState] = useRecoilState(FormStore);
	const pickUpAutocompleteRef = useRef<HTMLDivElement>(null);
	const dropOffAutocompleteRef = useRef<HTMLDivElement>(null);

	const {
		handleOnSearchPickUpAddress,
		isPickupLoading,
		pickupValue,
		pickupAddresses,
		setPickupValue,
		setPickupSuggestion,

		handleOnSearchDropOffAddress,
		isDropOffLoading,
		dropOffValue,
		dropOffAddresses,
		setDropOffValue,
		setDropOffSuggestion
	} = useFetchAddress();

	const clickOutsidePickupHandler = () => {
		!formState.collectionAddress && setPickupValue('');
		setFormState({
			...formState,
			isVisiblePickUpAutocomplete: false
		});
	};
	const clickOutsideDropOffHandler = () => {
		!formState.deliveryAddress && setDropOffValue('');
		setFormState({
			...formState,
			isVisibleDropOffAutocomplete: false
		});
	};

	// useOnClickOutside(pickUpAutocompleteRef, clickOutsidePickupHandler);
	// useOnClickOutside(dropOffAutocompleteRef, clickOutsideDropOffHandler);

	const handleSelectPickupAddress = (suggestion: string, id: string) => {
		setPickupValue(suggestion);
		suggestion && setPickupSuggestion(suggestion);
		setFormState({
			...formState,
			collectionAddressId: id,
			collectionAddress: suggestion
		});
	};

	const handleSelectDropOffAddress = (suggestion: string, id: string) => {
		setDropOffValue(suggestion);
		suggestion && setDropOffSuggestion(suggestion);
		setFormState({
			...formState,
			deliveryAddressId: id,
			deliveryAddress: suggestion
		});
	};

	const clearPickUpInput = () => {
		pickupValue !== '' && setPickupValue('');
		formState.collectionAddress !== null &&
			setFormState({
				...formState,
				collectionAddress: '',
				collectionLevelOfService: undefined,
				isVisiblePickUpAutocomplete: false
			});
	};

	const clearDropOffInput = () => {
		dropOffValue !== '' && setDropOffValue('');
		formState.deliveryAddress !== null &&
			setFormState({
				...formState,
				deliveryAddress: '',
				deliveryLevelOfService: undefined,
				isVisibleDropOffAutocomplete: false
			});
	};

	useEffect(() => {
		const bodyParentElem = document.body.parentElement;
		const bodyElem = document.body;
		if (
			(formState.isVisiblePickUpAutocomplete && pickupValue?.length > 0) ||
			(formState.isVisibleDropOffAutocomplete && dropOffValue?.length > 0)
		) {
			bodyParentElem && bodyParentElem.classList.add('no-scroll');
			bodyElem && bodyElem.classList.add('no-scroll');
		} else {
			bodyParentElem && bodyParentElem.classList.remove('no-scroll');
			bodyElem && bodyElem.classList.remove('no-scroll');
		}
	}, [
		dropOffValue?.length,
		formState.isVisibleDropOffAutocomplete,
		formState.isVisiblePickUpAutocomplete,
		pickupValue?.length
	]);

	useEffect(() => {
		const handleBlur = () => {
			setFormState({
				...formState,
				isVisiblePickUpAutocomplete: false,
				isVisibleDropOffAutocomplete: false,
				dropOffInputRef: false,
				collectionLevelOfService: undefined,
				deliveryLevelOfService: undefined
			});
		};

		window.addEventListener('blur', handleBlur);
		return () => window.removeEventListener('blur', handleBlur);
	}, [formState, setFormState]);

	return (
		<div
			className={`${styles.wrapper} ${
				formState.isVisiblePickUpAutocomplete ||
				formState.isVisibleDropOffAutocomplete
					? styles.overlay
					: ''
			}`}
		>
			<form autoComplete="off" className="relative z-10">
				<div className={styles['form-container']}>
					<div className={styles['form-input-wrapper']}>
						{isPickupLoading && (
							<Loader
								wrapperStyle="absolute top-0 right-2 !justify-end w-6 z-10"
								widthStyle="w-6"
								heightStyle="h-6"
							/>
						)}
						<div className="relative">
							<input
								type="text"
								name="pickup"
								placeholder="Pick up address"
								className={styles['form-input']}
								value={pickupValue}
								onChange={handleOnSearchPickUpAddress}
								onClick={clickOutsideDropOffHandler}
							/>
							{(pickupValue || formState.collectionAddress) && (
								<button
									type="button"
									className={styles.close}
									aria-label="Clear"
									onClick={clearPickUpInput}
								>
									<CloseIcon className={styles.closeIcon} />
								</button>
							)}
						</div>
					</div>
					<div className={styles.arrows}>
						<Image
							src={`${KEYS.CDN_URL}/images/arrows.webp`}
							width={64}
							height={32}
							alt="arrows"
						/>
					</div>
					<div className={styles['form-input-wrapper']}>
						{isDropOffLoading && (
							<Loader
								wrapperStyle="absolute top-0 right-2 !justify-end w-6 z-10"
								widthStyle="w-6"
								heightStyle="h-6"
							/>
						)}
						<div className="relative">
							<input
								key={formState.dropOffInputRef ? 'focused' : 'unfocused'}
								autoFocus={formState.dropOffInputRef}
								type="text"
								name="dropOff"
								placeholder="Drop off address"
								className={styles['form-input']}
								value={dropOffValue}
								onChange={handleOnSearchDropOffAddress}
								onClick={clickOutsidePickupHandler}
							/>
							{(dropOffValue || formState.deliveryAddress) && (
								<button
									type="button"
									className={styles.close}
									aria-label="Clear"
									onClick={clearDropOffInput}
								>
									<CloseIcon className={styles.closeIcon} />
								</button>
							)}
						</div>
					</div>

					<Dynamic.AutocompletePickUp
						pickUpAutocompleteRef={
							pickUpAutocompleteRef as RefObject<HTMLDivElement>
						}
						pickupValue={pickupValue}
						addresses={pickupAddresses as AddressSuggestion[]}
						handleSelectPickupAddress={handleSelectPickupAddress}
					/>

					<Dynamic.AutocompleteDropOff
						dropOffAutocompleteRef={
							dropOffAutocompleteRef as RefObject<HTMLDivElement>
						}
						dropOffValue={dropOffValue}
						addresses={dropOffAddresses as AddressSuggestion[]}
						handleSelectDropOffAddress={handleSelectDropOffAddress}
					/>
				</div>
			</form>
		</div>
	);
};
