import { BookingApi } from '@pd-frontend/api/booking';
import useSWR from 'swr';

export const useDeliveryDates = (collectionDate: string) => {
	const bookingApi = new BookingApi();

	const { data, error, ...rest } = useSWR(
		`/api/calendar/delivery-slots?collectionDate=${collectionDate}`,
		() => (collectionDate ? bookingApi.getDeliverySlots(collectionDate) : null),
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
