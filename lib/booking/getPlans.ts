import { BookingApi } from '@pd-frontend/api/booking';
import axios from 'axios';

export const getPlans = async () => {
	const bookingApi = new BookingApi();
	let pricePlans;

	try {
		const { data } = await bookingApi.getPlans();
		if (data) {
			pricePlans = { ...data };
		}
	} catch (err) {
		if (axios.isAxiosError(err)) {
			pricePlans = [];
			console.error('getPlans', err.message);
		}
	}

	return pricePlans;
};
