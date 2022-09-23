import {
	CreateCart,
	LevelOfService,
	ParkingAvailability
} from '@pd-backend/types';
import { BookingApi } from '@pd-frontend/api/booking';
import { FormStore } from '@pd-frontend/modules/booking/features/address-form/main-form.state';
import { showErrorToast } from '@pd-frontend/utils/show-toast';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';

export const useFormAddress = () => {
	const bookingApi = new BookingApi();
	const router = useRouter();
	const [formState, setFormState] = useRecoilState(FormStore);
	const formStateValues = useRecoilValue(FormStore);
	const isDisabled =
		formStateValues.collectionAddress === '' ||
		formStateValues.deliveryAddress === '';

	const formValues: CreateCart = {
		collection: {
			addressId: formState.collectionAddressId,
			address: formState.collectionAddress,
			parking: formState.collectionParking as ParkingAvailability,
			levelOfService: formState.collectionLevelOfService as LevelOfService,
			isLiftAvailable: formState.collectionIsLiftAvailable,
			entranceSteps: formState.collectionEntranceSteps
		},
		delivery: {
			addressId: formState.deliveryAddressId,
			address: formState.deliveryAddress,
			parking: formState.deliveryParking as ParkingAvailability,
			levelOfService: formState.deliveryLevelOfService as LevelOfService,
			isLiftAvailable: formState.deliveryIsLiftAvailable,
			entranceSteps: formState.deliveryEntranceSteps
		}
	};

	const handleOnClick = async () => {
		try {
			setFormState({ ...formState, dropOffInputRef: false });
			if (!isDisabled) {
				await bookingApi.createCart(formValues);
				router.push('/booking');
			}
		} catch (error) {
			showErrorToast(error, 'catch handleOnClick:useFormAddress');
		} finally {
			const bodyParentElem = document.body.parentElement;
			const bodyElem = document.body;
			bodyParentElem && bodyParentElem.classList.remove('no-scroll');
			bodyElem && bodyElem.classList.remove('no-scroll');
		}
	};

	return {
		isDisabled,
		handleOnClick
	};
};
