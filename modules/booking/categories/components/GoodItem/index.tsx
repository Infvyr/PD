import { Button } from '@pd-frontend/components';
import { CartItemState } from '@pd-frontend/interfaces/cart/interfaces';
import { cartAtom } from '@pd-frontend/modules/booking/features/cart/cart.state';
import { useCart } from '@pd-frontend/modules/booking/hooks';
import { useRecoilValue } from 'recoil';
import styles from './styles.module.css';

type Props = {
	goodItem: CartItemState;
};

export const GoodItem = (props: Props): JSX.Element => {
	const { name, id: goodId } = props.goodItem;
	const { addGoodItemToCart } = useCart();
	const cartItems = useRecoilValue(cartAtom);

	const isItemAdded = cartItems.find((cartItem) => cartItem.id === goodId);

	return (
		<li className={styles.item}>
			<strong className={styles.name}>{name}</strong>

			<>
				{!isItemAdded ? (
					<Button
						type="button"
						label="Add"
						className={styles.add}
						aria-label="Add item to cart"
						onClick={addGoodItemToCart(props.goodItem)}
					/>
				) : (
					<span className={`${styles.add} ${styles.inCart}`}>In cart</span>
				)}
			</>
		</li>
	);
};
