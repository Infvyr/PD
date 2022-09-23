import { CartItem, PriceFooter } from '@pd-frontend/modules/booking';
import {
	cartAtom,
	cartObject
} from '@pd-frontend/modules/booking/features/cart/cart.state';
import { useRecoilValue } from 'recoil';
import styles from './styles.module.css';

export const CartItems = (): JSX.Element => {
	const cartItems = useRecoilValue(cartAtom);
	const { containsAddedItem } = useRecoilValue(cartObject);

	return (
		<div className={styles.wrapper}>
			{containsAddedItem ? (
				<ul className={`no-scrollbar ${styles.list}`}>
					{cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} goodItem={cartItem} />
					))}
				</ul>
			) : (
				<p className={styles.empty}>Your cart is empty!</p>
			)}
			<PriceFooter isInsideCart />
		</div>
	);
};
