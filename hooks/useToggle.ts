import { useState } from 'react';

export const useToggle = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const handleOnChange = () => setIsVisible((prevState) => !prevState);

	return { isVisible, handleOnChange };
};
