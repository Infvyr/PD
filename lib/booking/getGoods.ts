import { Good } from '@pd-backend/types';
import { BookingApi } from '@pd-frontend/api/booking';
import axios from 'axios';

export const getGoods = async (categoryId?: number) => {
	const bookingApi = new BookingApi();
	let items: Good[] = [];

	try {
		const { data } = await bookingApi.getGoods(categoryId);
		if (data) {
			items = data;
		}
	} catch (err) {
		if (axios.isAxiosError(err)) {
			items = [];
			console.error('getGoods', err.message);
		}
	}

	return items;
};
