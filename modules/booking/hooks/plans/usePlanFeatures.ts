import { BookingApi } from '@pd-frontend/api/booking';
import { calendarAtom } from '@pd-frontend/modules/booking/features/calendar/calendar.state';
import { cartTotalPrice } from '@pd-frontend/modules/booking/features/cart/cart-total-price';
import {
	planAtom,
	plansPricesAtom,
	pricePlanAtom,
	selectPlanAtom
} from '@pd-frontend/modules/booking/features/plans/plan.state';
import { useDateSlots } from '@pd-frontend/modules/booking/hooks';
import { showErrorToast } from '@pd-frontend/utils/show-toast';
import { MouseEvent, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';

export const usePlanFeatures = () => {
	const [plan, setPlan] = useRecoilState(planAtom);
	const [selectPlan, setSelectPlan] = useRecoilState(selectPlanAtom);
	const [, setPlanPrice] = useRecoilState(pricePlanAtom);
	const [, setCartTotalPrice] = useRecoilState(cartTotalPrice);
	const plansPrices = useRecoilValue(plansPricesAtom);
	const resetCalendar = useResetRecoilState(calendarAtom);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { getCollectionSlots, setSlots, slots } = useDateSlots();

	const openModal =
		(pricePlanId: number, hasCalendar: boolean, isEnabled: boolean) =>
		(evt: MouseEvent<HTMLDivElement>) => {
			if (!hasCalendar) return;
			if (!isEnabled) return;
			let dataId = evt.currentTarget.getAttribute('data-id') as string;

			if (+dataId === pricePlanId) {
				setIsOpen(true);
				setPlan({
					...plan,
					pricePlanId,
					collection: {},
					delivery: {}
				});
				setSelectPlan({ ...selectPlan, isSelected: true });

				plansPrices?.filter((planPrice) => {
					if (planPrice.id === pricePlanId) {
						setPlanPrice({ ...planPrice, price: planPrice.price });
					}
				});
			}
		};

	const closeModal = () => {
		setIsOpen(false);
		resetCalendar();

		getCollectionSlots().then(() => {
			setSlots({
				...slots,
				deliverySlots: [],
				deliveryDates: []
			});
		});
	};

	const handleSelectPlan =
		(pricePlanId: number) => (evt: MouseEvent<HTMLDivElement>) => {
			let dataId = evt.currentTarget.getAttribute('data-id') as string;
			if (+dataId === pricePlanId) {
				setPlan({
					...plan,
					pricePlanId,
					delivery: {},
					collection: {}
				});
				setSelectPlan({ ...selectPlan, isSelected: true });
			}
		};

	const updateCartPrice = async (pricePlanId: number) => {
		if (pricePlanId) {
			try {
				const bookingApi = new BookingApi();
				const response = await bookingApi.updateCart({
					pricePlanId
				});

				if (response.data) {
					const cartPrice = await bookingApi.getCartTotalPrice();
					if (cartPrice?.data) {
						setCartTotalPrice({ price: cartPrice?.data.price });
					}
				}
			} catch (err) {
				showErrorToast(err, 'handleSelectPlan:plans');
			}
		}
	};

	return {
		isOpen,
		openModal,
		closeModal,
		handleSelectPlan,
		updateCartPrice
	};
};
