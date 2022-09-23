import { LevelOfService } from '@pd-backend/types';
import { FormStore } from '@pd-frontend/modules/booking/features/address-form/main-form.state';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

export const useFloorOperations = () => {
	const [formState, setFormState] = useRecoilState(FormStore);
	const [isActiveNo, setIsActiveNo] = useState<boolean>(false);
	const [isActiveYes, setIsActiveYes] = useState<boolean>(false);

	const [selected, setSelected] = useState<LevelOfService | string>(
		'Choose option'
	);
	const isSelected = selected !== 'Choose option';

	return {
		formState,
		setFormState,
		isActiveNo,
		isActiveYes,
		setIsActiveNo,
		setIsActiveYes,
		isSelected,
		selected,
		setSelected
	};
};
