import { MouseEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { FormStore } from '@pd-frontend/modules/booking/features/address-form/main-form.state';

export const useEntranceOperations = () => {
	const [formState, setFormState] = useRecoilState(FormStore);

	const [isActiveNo, setIsActiveNo] = useState<boolean>(false);
	const [isActiveYes, setIsActiveYes] = useState<boolean>(false);

	const handleOnClick =
		(dataName: string, key: string) => (evt: MouseEvent<HTMLButtonElement>) => {
			const btnValue = evt.currentTarget.getAttribute(dataName);

			if (btnValue === 'false') {
				setIsActiveNo(true);
				setIsActiveYes(false);
			}

			if (btnValue === 'true') {
				setIsActiveYes(true);
				setIsActiveNo(false);
			}

			setFormState({ ...formState, [key]: btnValue === 'true' });
		};

	return {
		isActiveNo,
		isActiveYes,
		handleOnClick
	};
};
