import { KEYS } from '@pd-frontend/config/keys';
import { Items } from '@pd-frontend/layout/home/services/types';

export const ITEMS: Items[] = [
	{
		id: 'single-items',
		image: `${KEYS.CDN_URL}/images/single-items.webp`,
		title: 'Single Items',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. '
	},
	{
		id: 'residential-movers',
		image: `${KEYS.CDN_URL}/images/residential-movers.webp`,
		title: 'Residential Movers',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. '
	},
	{
		id: 'commercial-moves',
		image: `${KEYS.CDN_URL}/images/commercial-moves.webp`,
		title: 'Commercial Moves',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. '
	}
];
