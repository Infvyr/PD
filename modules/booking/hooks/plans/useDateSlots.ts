import { CalendarSlot } from '@pd-backend/types';
import { BookingApi } from '@pd-frontend/api/booking';
import { BACKEND_DATE_FORMAT } from '@pd-frontend/config/dates';
import {
	planAtom,
	slotsAtom
} from '@pd-frontend/modules/booking/features/plans/plan.state';
import { showErrorToast } from '@pd-frontend/utils/show-toast';
import format from 'date-fns/format';
import { useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';

export const useDateSlots = () => {
	const [plan, setPlan] = useRecoilState(planAtom);
	const [slots, setSlots] = useRecoilState(slotsAtom);
	const [isLoadingDates, setIsLoadingDates] = useState<boolean>(false);
	const [errMessage, setErrMessage] = useState<string>();

	const bookingApi = useMemo(() => new BookingApi(), []);

	const getCollectionSlots = async () => {
		try {
			setIsLoadingDates(true);
			const response = await bookingApi.getCollectionSlots();

			if (response?.data) {
				let economyCollection = response?.data.find((date) => date.isFavorite);

				setSlots({
					...slots,
					collectionDates: response?.data.map((d) =>
						new Date(d.date).toISOString()
					),
					collectionSlots: response?.data?.map((res) => ({
						tripId: res?.tripId,
						tripDays: res?.tripDays,
						isFavorite: res?.isFavorite,
						date: new Date(res?.date).toDateString()
					}))
				});

				setPlan({
					...plan,
					economyCollection: {
						...plan.economyCollection,
						date: economyCollection?.date,
						tripId: economyCollection?.tripId,
						tripDays: economyCollection?.tripDays,
						isFavorite: economyCollection?.isFavorite
					}
				});
			}
		} catch (error) {
			showErrorToast(error, 'getCollectionSlots');
			setErrMessage('The calendar cannot be shown due to an issue.');
		} finally {
			setIsLoadingDates(false);
		}
	};

	const setCollectionData = async (
		startDate: Date | null,
		endDate: Date | null
	) => {
		try {
			console.log(startDate, endDate);
			const collectionDate = startDate !== null ? new Date(startDate) : null;
			const queryCollectionDate =
				startDate !== null
					? format(new Date(startDate), BACKEND_DATE_FORMAT)
					: '';
			const deliveryDate = endDate !== null ? new Date(endDate) : null;
			const selectedCollectionDate = startDate?.toDateString();
			const selectedCollectionSlot = slots.collectionSlots.find(
				(slot) => slot.date === selectedCollectionDate
			);

			await gatherCollectionData(
				collectionDate,
				deliveryDate,
				queryCollectionDate,
				selectedCollectionSlot
			);
		} catch (error) {
			showErrorToast(error, 'setCollectionData');
			setErrMessage('Delivery dates cannot be show right now due to an issue.');
		}
	};

	const gatherCollectionData = async (
		collectionDate: Date | null,
		deliveryDate: Date | null,
		queryCollectionDate: string,
		selectedCollectionSlot: CalendarSlot | undefined
	) => {
		if (collectionDate && !deliveryDate) {
			const response = await bookingApi.getDeliverySlots(queryCollectionDate);
			if (response?.data) {
				setSlots({
					...slots,
					deliveryDates: response?.data.map((d) =>
						new Date(d.date).toISOString()
					),
					deliverySlots: response?.data?.map((res) => ({
						tripId: res?.tripId,
						tripDays: res?.tripDays,
						isFavorite: res?.isFavorite,
						date: new Date(res?.date).toDateString()
					}))
				});

				setPlan({
					...plan,
					collection: {
						...plan.collection,
						date: collectionDate.toISOString(),
						tripId: selectedCollectionSlot?.tripId,
						tripDays: selectedCollectionSlot?.tripDays,
						isFavorite: selectedCollectionSlot?.isFavorite
					}
				});
			}
		}
	};

	const gatherDeliveryData = (endDate: Date | null) => {
		const deliveryDate = endDate !== null ? new Date(endDate) : undefined;

		if (deliveryDate) {
			const selectedDeliveryDate = endDate?.toDateString();
			const selectedDeliverySlot = slots.deliverySlots.find(
				(slot) => slot.date === selectedDeliveryDate
			);

			setPlan({
				...plan,
				delivery: {
					...plan.delivery,
					date: deliveryDate.toISOString(),
					tripId: selectedDeliverySlot?.tripId,
					tripDays: selectedDeliverySlot?.tripDays,
					isFavorite: selectedDeliverySlot?.isFavorite
				}
			});
		}
	};

	return {
		getCollectionSlots,
		setCollectionData,
		gatherDeliveryData,
		slots,
		setSlots,
		isLoadingDates,
		setIsLoadingDates,
		errMessage
	};
};
