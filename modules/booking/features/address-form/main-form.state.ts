import { atom } from 'recoil';

interface FormValues {
	isVisiblePickUpAutocomplete: boolean;
	isVisibleDropOffAutocomplete: boolean;
	dropOffInputRef: boolean;

	collectionAddressId: string;
	collectionAddress: string;
	collectionParking: string | undefined;
	collectionLevelOfService: string | undefined;
	collectionIsLiftAvailable: boolean | undefined;
	collectionEntranceSteps: boolean | undefined;

	deliveryAddressId: string;
	deliveryAddress: string;
	deliveryParking: string | undefined;
	deliveryLevelOfService: string | undefined;
	deliveryIsLiftAvailable: boolean | undefined;
	deliveryEntranceSteps: boolean | undefined;
}

export const FormStore = atom<FormValues>({
	key: 'form-store',
	default: {
		isVisiblePickUpAutocomplete: false,
		isVisibleDropOffAutocomplete: false,
		dropOffInputRef: false,

		collectionAddressId: '',
		collectionAddress: '',
		collectionParking: undefined,
		collectionLevelOfService: undefined,
		collectionIsLiftAvailable: undefined,
		collectionEntranceSteps: undefined,

		deliveryAddressId: '',
		deliveryAddress: '',
		deliveryParking: undefined,
		deliveryLevelOfService: undefined,
		deliveryIsLiftAvailable: undefined,
		deliveryEntranceSteps: undefined
	}
});
