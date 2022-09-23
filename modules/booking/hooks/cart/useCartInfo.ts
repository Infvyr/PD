import { CartItem } from '@pd-backend/types';
import { BookingApi } from '@pd-frontend/api/booking';
import useSWR from 'swr';

export const useCartInfo = () => {
	const bookingApi = new BookingApi();

	const { data, error, ...rest } = useSWR(
		'/api/cart',
		() => bookingApi.getCartInfo(),
		{
			onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
				if (error.status === 404) return;
				if (retryCount >= 2) return;
			}
		}
	);
	const loading = !data && !error;
	const cartItems = data?.data?.items as CartItem[];
	const cartLength = !!cartItems?.length;
	const totalQuantity = cartItems?.reduce(
		(previousValue, currentValue) => previousValue + currentValue.quantity,
		0
	);

	return {
		data: data?.data,
		error,
		loading,
		cartItems,
		cartLength,
		totalQuantity,
		...rest
	};
};
