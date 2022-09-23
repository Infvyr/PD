import { ReactComponent as DeleteIcon } from '/public/assets/images/svg/trash.svg';
import { CartItemState } from '@pd-frontend/interfaces/cart/interfaces';
import { Action, useCart } from '@pd-frontend/modules/booking/hooks';
import styles from '@pd-frontend/modules/booking/components/Cart/CartItems/Item.module.css';

type Props = {
	// quantity: number;
	goodItem: CartItemState;
};

export const CartOperations = ({ goodItem }: Props) => {
	const { onIncreaseQty, onDecreaseQty, deleteItem } = useCart();

	return (
		<div className={styles.actions}>
			{goodItem.qty > 1 ? (
				<button
					type="button"
					className={styles.action}
					aria-label="Decrease amount"
					onClick={onDecreaseQty(goodItem, Action.DECREASE)}
					disabled={goodItem.qty === 1}
				>
					-
				</button>
			) : (
				<button
					type="button"
					aria-label="Delete item"
					className={styles.delete}
					onClick={deleteItem(goodItem)}
				>
					<DeleteIcon className={styles.deleteIcon} />
				</button>
			)}

			<span className={styles.amount}>{goodItem.qty}</span>

			<button
				type="button"
				className={styles.action}
				aria-label="Increase amount"
				onClick={onIncreaseQty(goodItem, Action.INCREASE)}
			>
				+
			</button>
		</div>
	);
};
