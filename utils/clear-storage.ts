export const clearStorage = {
	client: typeof window !== 'undefined',

	price: () => {
		if (clearStorage.client) {
			window.localStorage.removeItem('cart-total-price');
		}
	},

	cart: () => {
		if (clearStorage.client) {
			window.localStorage.removeItem('cart-storage');
			window.localStorage.removeItem('cart-total-price');
			window.localStorage.removeItem('plans-prices');
		}
	}
};
