import { BookingApi } from '@pd-frontend/api/booking';
import { CartItemState } from '@pd-frontend/interfaces/cart/interfaces';
import {
	cartPriceLoading,
	cartTotalPrice
} from '@pd-frontend/modules/booking/features/cart/cart-total-price';
import {
	addToCart,
	cartAtom,
	deleteFromCart,
	removeFromCart
} from '@pd-frontend/modules/booking/features/cart/cart.state';
import { plansPricesAtom } from '@pd-frontend/modules/booking/features/plans/plan.state';
import { showErrorToast } from '@pd-frontend/utils/show-toast';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import debounce from 'lodash/debounce';
import { useRecoilState } from 'recoil';

const debounceTime = 300;

export enum Action {
	INCREASE = 'increase',
	DECREASE = 'decrease'
}

export const useCart = () => {
	const [goodsWarehouse, setGoodsWarehouse] = useRecoilState(cartAtom);
	const [, setCartTotalPrice] = useRecoilState(cartTotalPrice);
	const [, setIsPriceLoaded] = useRecoilState(cartPriceLoading);
	const [, setPlansPrices] = useRecoilState(plansPricesAtom);
	const router = useRouter();
	const isClient = typeof window !== 'undefined';

	const addGoodItem = useMemo(
		() =>
			debounce(async (item: CartItemState) => {
				try {
					setIsPriceLoaded(true);

					const bookingApi = new BookingApi();
					await bookingApi.addCartGoodItem(item.id).then(() => {
						const newCart: CartItemState[] = addToCart(goodsWarehouse, item);
						setGoodsWarehouse(newCart);
					});
					await bookingApi.getCartTotalPrice().then((response) => {
						const price = response?.data?.price;
						if (isClient) {
							setCartTotalPrice({ price });
						}
					});
				} catch (err) {
					showErrorToast(err, 'addGoodItem');
					setIsPriceLoaded(false);
				} finally {
					setIsPriceLoaded(false);
				}
			}, debounceTime),
		[
			goodsWarehouse,
			isClient,
			setCartTotalPrice,
			setGoodsWarehouse,
			setIsPriceLoaded
		]
	);
	const addGoodItemToCart = (item: CartItemState) => () => addGoodItem(item);

	const updateGoodItem = useMemo(
		() => async (item: CartItemState, action: Action) => {
			try {
				setIsPriceLoaded(true);

				const bookingApi = new BookingApi();
				await bookingApi.updateCartGoodItem(
					item.id,
					action === 'increase' ? item.qty + 1 : item.qty - 1
				);
				await bookingApi.getCartTotalPrice().then((response) => {
					const price = response?.data?.price;
					if (isClient) {
						setCartTotalPrice({ price });
					}
				});

				await handlePlansPrice();
			} catch (err) {
				showErrorToast(err, 'updateGoodItem');
			} finally {
				setIsPriceLoaded(false);
			}
		},
		[isClient, setCartTotalPrice, setIsPriceLoaded]
	);
	const onIncreaseQty = (item: CartItemState, action: Action) => () => {
		// update state
		const newCart: CartItemState[] = addToCart(goodsWarehouse, item);
		setGoodsWarehouse(newCart);

		// make api call
		updateGoodItem(item, action);
	};
	const onDecreaseQty = (item: CartItemState, action: Action) => () => {
		// update state
		const newCart: CartItemState[] = removeFromCart(goodsWarehouse, item);
		setGoodsWarehouse(newCart);

		// make api call
		if (item.qty > 1) {
			updateGoodItem(item, action);
		}
	};

	const handlePlansPrice = useMemo(
		() => async () => {
			const bookingApi = new BookingApi();
			if (router.pathname === '/booking/plans') {
				await bookingApi.getPricePlans().then((response) => {
					const result = response?.data;
					if (isClient) {
						setPlansPrices(result);
					}
				});
			}
		},
		[isClient, router.pathname]
	);

	const removeGoodItem = useMemo(
		() => async (item: CartItemState) => {
			try {
				setIsPriceLoaded(true);

				const bookingApi = new BookingApi();
				await bookingApi.deleteCartGoodItem(item.id).then(() => {
					const newCart: CartItemState[] = deleteFromCart(goodsWarehouse, item);
					setGoodsWarehouse(newCart);
				});
				await bookingApi.getCartTotalPrice().then((response) => {
					const price = response?.data?.price;
					if (isClient) {
						setCartTotalPrice({ price });
					}
				});
				await handlePlansPrice();
			} catch (err) {
				showErrorToast(err, 'deleteItem');
			} finally {
				setIsPriceLoaded(false);
			}
		},
		[
			goodsWarehouse,
			isClient,
			setCartTotalPrice,
			setGoodsWarehouse,
			setIsPriceLoaded
		]
	);
	const deleteItem = (item: CartItemState) => () => removeGoodItem(item);

	return {
		addGoodItemToCart,
		onIncreaseQty,
		onDecreaseQty,
		deleteItem
	};
};
