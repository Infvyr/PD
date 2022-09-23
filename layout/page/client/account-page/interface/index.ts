import { ReactNode } from 'react';

export interface Page {
	icon: ReactNode | string;
	label: string;
	url: string;
}
