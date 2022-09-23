import { BookingApi } from '@pd-frontend/api/booking';
import axios from 'axios';

export const getOrderConfirmation = async () => {
	let order;
	const bookingApi = new BookingApi();

	try {
		const { data } = await bookingApi.getOrderConfirmation();
		if (data) {
			order = { ...data };
		}
	} catch (err) {
		if (axios.isAxiosError(err)) {
			console.error('getOrderConfirmation', err.message);
		}
		console.error(err);
	}

	return order;
};
