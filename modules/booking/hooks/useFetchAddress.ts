import { AddressSuggestion } from '@pd-backend/types';
import { ChangeEvent, useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { BookingApi } from '@pd-frontend/api/booking';
import { FormStore } from '@pd-frontend/modules/booking/features/address-form/main-form.state';
import { LETTER_NUMBER_REGEX } from '@pd-frontend/modules/booking/config/constants';

export const useFetchAddress = () => {
	const [formState, setFormState] = useRecoilState(FormStore);

	// pickup
	const [isPickupLoading, setIsPickUpLoading] = useState<boolean>(false);
	const [pickupValue, setPickupValue] = useState('');
	const [pickupSuggestion, setPickupSuggestion] = useState('');
	const [pickupAddresses, setPickupAddresses] = useState<AddressSuggestion[]>();

	// dropOff
	const [isDropOffLoading, setIsDropOffLoading] = useState<boolean>(false);
	const [dropOffValue, setDropOffValue] = useState('');
	const [dropOffSuggestion, setDropOffSuggestion] = useState('');
	const [dropOffAddresses, setDropOffAddresses] =
		useState<AddressSuggestion[]>();

	// pickup api request
	const handleOnSearchPickUpAddress = useCallback(
		async (evt: ChangeEvent<HTMLInputElement>) => {
			const bookingApi = new BookingApi();
			const inputValue = evt.target.value.trimStart();
			const canSearchAddress =
				inputValue !== '' &&
				inputValue.length >= 2 &&
				inputValue.match(LETTER_NUMBER_REGEX);

			setPickupValue(inputValue);
			setFormState({ ...formState, isVisiblePickUpAutocomplete: true });

			if (canSearchAddress) {
				try {
					setIsPickUpLoading(true);
					await bookingApi
						.getAddresses(inputValue)
						.then((res) => setPickupAddresses(res?.data));
				} catch (error) {
					setFormState({ ...formState, isVisiblePickUpAutocomplete: false });
					setIsPickUpLoading(false);
				} finally {
					setIsPickUpLoading(false);
				}
			}

			if (inputValue === '' && inputValue.length <= 1) {
				setPickupValue('');
				setPickupAddresses([]);
				setFormState({ ...formState, isVisiblePickUpAutocomplete: false });
			}
		},
		[formState, setFormState]
	);

	// dropOff api request
	const handleOnSearchDropOffAddress = useCallback(
		async (evt: ChangeEvent<HTMLInputElement>) => {
			const bookingApi = new BookingApi();
			const inputValue = evt.target.value.trimStart();
			const canSearchAddress =
				inputValue !== '' &&
				inputValue.length >= 2 &&
				inputValue.match(LETTER_NUMBER_REGEX);

			setDropOffValue(inputValue);
			setFormState({ ...formState, isVisibleDropOffAutocomplete: true });

			if (canSearchAddress) {
				try {
					setIsDropOffLoading(true);
					await bookingApi
						.getAddresses(inputValue)
						.then((res) => setDropOffAddresses(res?.data));
				} catch (error) {
					setFormState({ ...formState, isVisibleDropOffAutocomplete: false });
					setIsDropOffLoading(false);
				} finally {
					setIsDropOffLoading(false);
				}
			}

			if (inputValue === '' && inputValue.length <= 1) {
				setDropOffValue('');
				setDropOffAddresses([]);
				setFormState({ ...formState, isVisibleDropOffAutocomplete: false });
			}
		},
		[formState, setFormState]
	);

	return {
		handleOnSearchPickUpAddress,
		isPickupLoading,
		pickupValue,
		pickupAddresses,
		setPickupValue,
		pickupSuggestion,
		setPickupSuggestion,

		handleOnSearchDropOffAddress,
		isDropOffLoading,
		dropOffValue,
		dropOffAddresses,
		setDropOffValue,
		dropOffSuggestion,
		setDropOffSuggestion
	};
};
