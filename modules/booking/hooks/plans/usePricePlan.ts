import { BookingApi } from '@pd-frontend/api/booking';
import useSWR from 'swr';

export const usePricePlan = () => {
	const bookingApi = new BookingApi();

	const { data, error, ...rest } = useSWR(
		'/api/price-plans/-/total-price',
		() => bookingApi.getPricePlans(),
		{
			revalidateOnFocus: false,
			onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
				if (error.status === 404) return;
				if (retryCount >= 2) return;
			}
		}
	);
	const loading = !data && !error;

	return {
		data: data?.data,
		error,
		loading,
		...rest
	};
};
