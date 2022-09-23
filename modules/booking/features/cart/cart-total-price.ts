import { TotalPrice } from '@pd-backend/types';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'cart-total-price'
});

export const cartTotalPrice = atom<TotalPrice>({
	key: 'cartTotalPrice',
	default: { price: 0 },
	effects_UNSTABLE: [persistAtom]
});

export const cartPriceLoading = atom({
	key: 'cartLoading',
	default: false
});
