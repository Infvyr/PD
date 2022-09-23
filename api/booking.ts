import {
	AddressSuggestion,
	CalendarSlot,
	Cart,
	CartItem,
	CreateCart,
	CreatePaymentIntentResponse,
	Good,
	GoodCategory,
	OrderConfirmationResponse,
	PricePlan,
	PricePlanTotalPrice,
	RemoveCartItem,
	TotalPrice,
	UpdateCart
} from '@pd-backend/types';
import apiClient from '@pd-frontend/config/axios/configuration';

export class BookingApi {
	getAddresses = (searchText: string) =>
		apiClient.get<AddressSuggestion[]>(
			`/api/addresses/search?text=${searchText}`
		);

	createCart = (values: CreateCart) =>
		apiClient.post<CreateCart>('/api/cart/create', values);

	getCartInfo = () => apiClient.get<Cart>('/api/cart');

	getGoodsCategories = () =>
		apiClient.get<GoodCategory[]>('/api/goods/-/categories');

	getGoods = (categoryId?: number) =>
		apiClient.get<Good[]>(
			`/api/goods?limit=1000&${
				categoryId ? `filter.categoryId=${categoryId}` : ''
			}`
		);
	addCartGoodItem = (id: number) =>
		apiClient.post<Cart>('/api/cart/add', { goodId: id });

	updateCartGoodItem = (goodId: number, quantity: number) =>
		apiClient.patch<CartItem>('/api/cart/update', {
			items: [{ goodId, quantity }]
		});

	updateCart = (values: UpdateCart) =>
		apiClient.patch<UpdateCart>('/api/cart/update', values);

	deleteCartGoodItem = (id: number) =>
		apiClient.delete<RemoveCartItem>('/api/cart/remove', {
			data: { goodId: id }
		});

	getCartTotalPrice = () => apiClient.get<TotalPrice>('/api/cart/total-price');

	getPlans = () => apiClient.get<PricePlan>('/api/price-plans');

	getPricePlans = () =>
		apiClient.get<PricePlanTotalPrice[]>('/api/price-plans/-/total-price');

	getCollectionSlots = () =>
		apiClient.get<CalendarSlot[]>('/api/calendar/collection-slots');

	getDeliverySlots = (collectionDate: string) =>
		apiClient.get<CalendarSlot[]>(
			`/api/calendar/delivery-slots?collectionDate=${collectionDate}`
		);

	createPayment = (amount: number) =>
		apiClient.post<CreatePaymentIntentResponse>('/api/payments/create', {
			amount
		});

	confirmPayment = (paymentIntentId: string, amount: number, orderId: number) =>
		apiClient.post<CreatePaymentIntentResponse>('/api/payments/confirm', {
			paymentIntentId,
			amount,
			orderId
		});

	getOrderConfirmation = () =>
		apiClient.get<OrderConfirmationResponse>('/api/orders/-/confirmation');
}
