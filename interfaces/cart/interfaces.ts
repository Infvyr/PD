import { Good } from '@pd-backend/types';

export interface CartItemState extends Good {
	inCart: boolean;
	qty: number;
}
