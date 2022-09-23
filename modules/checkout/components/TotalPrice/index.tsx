import { cartTotalPrice } from '@pd-frontend/modules/booking/features/cart/cart-total-price';
import { toPounds } from '@pd-frontend/utils/price-format';
import { useRecoilValue } from 'recoil';

export const TotalPrice = (): JSX.Element => {
	const total = useRecoilValue(cartTotalPrice);

	return (
		<div className="flex justify-center gap-x-3">
			<span className="uppercase text-xl font-light !leading-none self-end">
				Total price:
			</span>
			<b className="text-secondary text-3xl !leading-[18px]">
				{toPounds(total.price)}
			</b>
		</div>
	);
};
