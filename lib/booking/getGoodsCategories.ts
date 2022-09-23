import { GoodCategory } from '@pd-backend/types';
import { BookingApi } from '@pd-frontend/api/booking';
import axios from 'axios';

export const getGoodsCategories = async () => {
	const bookingApi = new BookingApi();
	let categoriesData: GoodCategory[] = [];

	try {
		const { data } = await bookingApi.getGoodsCategories();
		if (data) {
			categoriesData = data;
		}
	} catch (err) {
		if (axios.isAxiosError(err)) {
			categoriesData = [];
			console.error('getGoodsCategories', err.message);
		}
	}

	return categoriesData;
};
