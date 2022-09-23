import { FormStore } from '@pd-frontend/modules/booking/features/address-form/main-form.state';
import { useRecoilState } from 'recoil';

export const useOnClickAddressInput = () => {
	const [formState, setFormState] = useRecoilState(FormStore);

	const handleOnClickPickUpInput = () =>
		formState.collectionAddress.length > 1 &&
		setFormState({
			...formState,
			isVisiblePickUpAutocomplete: true,
			isVisibleDropOffAutocomplete: false,
			dropOffInputRef: false
		});

	const handleOnClickDropOffInput = () =>
		formState.deliveryAddress.length > 1 &&
		setFormState({
			...formState,
			isVisibleDropOffAutocomplete: true,
			isVisiblePickUpAutocomplete: false
		});

	return { handleOnClickPickUpInput, handleOnClickDropOffInput };
};
