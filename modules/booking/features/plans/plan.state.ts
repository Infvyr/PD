import { CalendarSlot } from '@pd-backend/types';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'plans-prices'
});

interface PlanPage {
	collection: {
		date?: string;
		isFavorite?: boolean;
		tripId?: string;
		tripDays?: number;
	};
	delivery: {
		date?: string;
		isFavorite?: boolean;
		tripId?: string;
		tripDays?: number;
	};
	pricePlanId: number | undefined;
	economyCollection: {
		date?: string;
		isFavorite?: boolean;
		tripId?: string;
		tripDays?: number;
	};
	economyDelivery: {
		date?: string;
		isFavorite?: boolean;
		tripId?: string;
		tripDays?: number;
	};
}

interface Slots {
	collectionSlots: CalendarSlot[];
	deliverySlots: CalendarSlot[];
	collectionDates: string[];
	deliveryDates: string[];
}

export const planAtom = atom<PlanPage>({
	key: 'plan-store',
	default: {
		collection: {},
		delivery: {},
		pricePlanId: undefined,
		economyCollection: { date: '' },
		economyDelivery: { date: '' }
	}
});

export const slotsAtom = atom<Slots>({
	key: 'slot-store',
	default: {
		collectionSlots: [],
		deliverySlots: [],
		collectionDates: [],
		deliveryDates: []
	}
});

export const selectPlanAtom = atom({
	key: 'select-plan',
	default: {
		isSelected: false
	}
});

export const pricePlanAtom = atom<{ price: number | undefined }>({
	key: 'price-plan',
	default: {
		price: undefined
	}
});

export const plansPricesAtom = atom<{ price: number; id: number }[]>({
	key: 'total-plans-prices',
	default: [],
	effects_UNSTABLE: [persistAtom]
});
