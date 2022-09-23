import { useEffect, useState } from 'react';

export const useScroller = (scroller: HTMLElement | null, hideFrom: number) => {
	const [isVisibleOnScrollDown, setIsVisibleOnScrollDown] =
		useState<boolean>(true);
	const [isVisibleOnScrollUp, setIsVisibleOnScrollUp] =
		useState<boolean>(false);

	useEffect(() => {
		const listenToScroll = () => {
			if ((scroller?.scrollTop as number) > hideFrom) {
				setIsVisibleOnScrollDown(false);
				setIsVisibleOnScrollUp(true);
			} else {
				setIsVisibleOnScrollDown(true);
				setIsVisibleOnScrollUp(false);
			}
		};

		scroller?.addEventListener('scroll', listenToScroll);
		return () => scroller?.removeEventListener('scroll', listenToScroll);
	}, [hideFrom, scroller]);

	return { isVisibleOnScrollDown, isVisibleOnScrollUp };
};
