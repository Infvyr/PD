import { CartItemState } from '@pd-frontend/interfaces/cart/interfaces';
import { CartOperations } from '@pd-frontend/modules/booking';
import styles from './Item.module.css';

type Props = {
	goodItem: CartItemState;
};

export const CartItem = (props: Props): JSX.Element => {
	const { name, inCart } = props.goodItem;

	return (
		<>
			{inCart && (
				<li className={styles.item}>
					<span className={styles.name}>{name}</span>
					<CartOperations goodItem={props.goodItem} />
				</li>
			)}
		</>
	);
};
