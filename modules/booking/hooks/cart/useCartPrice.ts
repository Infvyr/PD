import { BookingApi } from '@pd-frontend/api/booking';
import { cartTotalPrice } from '@pd-frontend/modules/booking/features/cart/cart-total-price';
import { useCallback, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

export const useCartPrice = () => {
	const [cartPrice, setCartTotalPrice] = useRecoilState(cartTotalPrice);
	const totalPriceFetchedRef = useRef(false);

	const getTotalPrice = useCallback(async () => {
		try {
			const bookingApi = new BookingApi();
			const response = await bookingApi.getCartTotalPrice();
			const price = response?.data?.price;
			if (price) {
				setCartTotalPrice({ price });
			}
		} catch (error) {
			console.error(error);
			setCartTotalPrice({ price: 0 });
		}
	}, [setCartTotalPrice]);

	useEffect(() => {
		if (totalPriceFetchedRef.current) return;
		totalPriceFetchedRef.current = true;

		getTotalPrice();
	}, [getTotalPrice]);

	const totalPrice = cartPrice?.price;

	return { totalPrice, cartPrice };
};
