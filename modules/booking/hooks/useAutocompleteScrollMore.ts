import { useEffect, useState } from 'react';

export const useAutocompleteScrollMore = () => {
	const [hidePickupMoreIcon, setHidePickupMoreIcon] = useState<string>('');
	const [hideDropOffMoreIcon, setHideDropOffMoreIcon] = useState<string>('');

	const setPickUpVisibility = () => {
		const scrollTop = window.scrollY;
		const pickUpClassName = scrollTop >= 5 ? 'hidden' : '';
		setHidePickupMoreIcon(pickUpClassName);
	};

	const setDropOffVisibility = () => {
		const scrollTop = window.scrollY;
		const dropOffClassName = scrollTop >= 5 ? 'hidden' : '';
		setHideDropOffMoreIcon(dropOffClassName);
	};

	useEffect(() => {
		window.addEventListener('scroll', setPickUpVisibility);
		return () => window.removeEventListener('scroll', setPickUpVisibility);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', setDropOffVisibility);
		return () => window.removeEventListener('scroll', setDropOffVisibility);
	}, []);

	return {
		hidePickupMoreIcon,
		hideDropOffMoreIcon
	};
};
