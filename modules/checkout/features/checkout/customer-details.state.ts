import { atom } from 'recoil';

interface CustomerDetails {
	fullName?: string;
	email?: string;
	phone?: string;
}

export const customerDetailsAtom = atom<CustomerDetails>({
	key: 'customer-details-store',
	default: {}
});
