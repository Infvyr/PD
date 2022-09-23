import { CartItemState } from '@pd-frontend/interfaces/cart/interfaces';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'cart-storage'
});

export const cartAtom = atom<CartItemState[]>({
	key: 'cartItems',
	default: [],
	effects_UNSTABLE: [persistAtom]
});

export const cartObject = selector({
	key: 'cartObject',
	get: ({ get }) => {
		const cart = get(cartAtom);

		const containsAddedItem = !!cart.find((cartItem) => cartItem.inCart);

		const totalQty = cart?.reduce(
			(previousValue, currentValue) => previousValue + currentValue.qty,
			0
		);

		return { containsAddedItem, totalQty };
	}
});

export const addToCart = (cart: CartItemState[], item: CartItemState) => {
	const newCart = [...cart];
	const foundIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

	// Increase quantity if existing item in cart state
	if (foundIndex >= 0) {
		newCart[foundIndex] = {
			...cart[foundIndex],
			qty: cart[foundIndex].qty + 1,
			inCart: true
		};
		return newCart;
	}

	// Add new item to cart state
	newCart.push({
		...item,
		qty: 1,
		inCart: true
	});
	return newCart;
};

export const removeFromCart = (cart: CartItemState[], item: CartItemState) => {
	const newCart = [...cart];
	const foundIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

	// Decrease quantity if existing item in cart state
	if (foundIndex >= 0) {
		newCart[foundIndex] = {
			...cart[foundIndex],
			qty: cart[foundIndex].qty - 1
		};
	}

	return newCart;
};

export const deleteFromCart = (cart: CartItemState[], item: CartItemState) =>
	[...cart].filter((cartItem) => cartItem.id !== item.id);
