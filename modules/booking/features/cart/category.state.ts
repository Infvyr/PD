import { CartItemState } from '@pd-frontend/interfaces/cart/interfaces';
import { atom, selector } from 'recoil';

export const bookingGoodsAtom = atom<CartItemState[]>({
	key: 'booking-goods',
	default: []
});

export const filterBookingGoodsAtom = atom({
	key: 'filter-booking-goods',
	default: ''
});

export const filteredBookingGoodsAtom = selector({
	key: 'filtered-booking-goods',
	get: ({ get }) =>
		get(bookingGoodsAtom).filter((item) =>
			item.name
				?.toLowerCase()
				.includes(get(filterBookingGoodsAtom).toLowerCase())
		)
});
