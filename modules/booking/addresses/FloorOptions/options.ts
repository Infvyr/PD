import { LevelOfServiceMap } from '@pd-backend/types';

export const MenuOptions = Object.entries(LevelOfServiceMap).map(
	([value, name], index) => ({
		id: index,
		name,
		value
	})
);
