import { ParkingAvailability } from '@pd-backend/types';
import { useState } from 'react';

export const useParkingOptions = () => {
	const [isActiveNo, setIsActiveNo] = useState<boolean>(false);
	const [isActiveOutside, setIsActiveOutside] = useState<boolean>(false);
	const [isActiveOnStreet, setIsActiveOnStreet] = useState<boolean>(false);
	const [isActiveNearby, setIsActiveNearby] = useState<boolean>(false);

	const makeButtonActive = (val: string) => {
		switch (val) {
			case ParkingAvailability.NO:
				setIsActiveNo((current) => !current);
				setIsActiveOutside(false);
				setIsActiveOnStreet(false);
				setIsActiveNearby(false);
				break;

			case ParkingAvailability.SPACE_OUTSIDE:
				setIsActiveOutside((current) => !current);
				setIsActiveNo(false);
				setIsActiveOnStreet(false);
				setIsActiveNearby(false);
				break;

			case ParkingAvailability.ON_STREET:
				setIsActiveOnStreet((current) => !current);
				setIsActiveNo(false);
				setIsActiveOutside(false);
				setIsActiveNearby(false);
				break;

			case ParkingAvailability.NEARBY:
				setIsActiveNearby((current) => !current);
				setIsActiveNo(false);
				setIsActiveOutside(false);
				setIsActiveOnStreet(false);
				break;

			default:
				setIsActiveNearby(false);
				setIsActiveNo(false);
				setIsActiveOutside(false);
				setIsActiveOnStreet(false);
				break;
		}
	};

	return {
		isActiveNo,
		isActiveOutside,
		isActiveOnStreet,
		isActiveNearby,
		makeButtonActive
	};
};
