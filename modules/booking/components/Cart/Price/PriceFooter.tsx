import { Loader } from '@pd-frontend/components';
import {
	cartPriceLoading,
	cartTotalPrice
} from '@pd-frontend/modules/booking/features/cart/cart-total-price';
import { toPounds } from '@pd-frontend/utils/price-format';
import styles from '@pd-frontend/modules/booking/components/Cart/Price/PriceFooter.module.css';
import { useRecoilValue } from 'recoil';

type Props = {
	isInsideCart?: boolean;
};

export const PriceFooter = ({ isInsideCart = false }: Props) => {
	const total = useRecoilValue(cartTotalPrice);
	const isPriceLoading = useRecoilValue(cartPriceLoading);

	return (
		<footer
			className={`${styles.footer} ${
				isInsideCart ? styles.inside : styles.outside
			} ${isPriceLoading ? 'min-w-[151px] min-h-[51px]' : ''}`}
		>
			{isPriceLoading ? (
				<Loader
					wrapperStyle={`w-7 h-7 ${isPriceLoading ? '' : 'mb-1.5'}`}
					spinnerStyle="border border-white bg-transparent w-[inherit] h-[inherit]"
				/>
			) : (
				<>
					<b className={styles.total}>≈ {toPounds(total.price)}</b>
					<span className={styles.warning}>
						*The final price may be different
					</span>
				</>
			)}
		</footer>
	);
};
