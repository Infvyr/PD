import { useCallback, useState } from 'react';

export const useMenuItemScrollToSection = () => {
	const [itemUrl, setItemUrl] = useState<string>('');

	const scrollToSection = useCallback(
		(url: string) => () => {
			const sections = document.querySelectorAll('[data-section]');
			if (!sections) return;

			Array.from(sections).map((section) => {
				let dataSection = section?.getAttribute('data-section');
				if (!dataSection) return;

				if (dataSection === url) {
					section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
					setItemUrl(url);
				}
			});
		},
		[]
	);

	return { scrollToSection, itemUrl };
};
