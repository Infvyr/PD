import { CartTotal } from '@pd-frontend/components';
import { useOnClickOutside } from '@pd-frontend/hooks/useClickOutside';
import { CartItems, PriceFooter } from '@pd-frontend/modules/booking';
import { cartObject } from '@pd-frontend/modules/booking/features/cart/cart.state';
import { useCartInfo } from '@pd-frontend/modules/booking/hooks';
import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styles from './styles.module.css';

export const Cart = (): JSX.Element => {
	const { containsAddedItem, totalQty } = useRecoilValue(cartObject);
	const { cartLength } = useCartInfo();
	const [visible, setVisible] = useState<boolean>(false);
	const cartRef = useRef<HTMLDivElement>(null);
	const clickOutsideHandler = () => setVisible(false);
	const handleClick = () => setVisible(true);
	useOnClickOutside(cartRef, clickOutsideHandler);

	return (
		<>
			{(containsAddedItem || cartLength) && (
				<div className={styles.cart} ref={cartRef} onClick={handleClick}>
					<div
						className={`${visible ? styles['cart--visible'] : styles.visible}`}
					>
						<header
							className={`${visible ? styles['icon--visible'] : styles.icon}`}
						>
							<CartTotal visible={visible} totalQty={totalQty} />
							<>{visible && <CartItems />}</>
						</header>
						{!visible && <PriceFooter />}
					</div>
				</div>
			)}
		</>
	);
};
