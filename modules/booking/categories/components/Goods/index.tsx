import { Dynamic } from '@pd-frontend/components/dynamic-export';
import { GoodItem } from '@pd-frontend/modules/booking/categories/components';
import { filteredBookingGoodsAtom } from '@pd-frontend/modules/booking/features/cart/category.state';
import { useRecoilValue } from 'recoil';
import styles from './style.module.css';

type Props = {
	toShow?: number;
};

export const Goods = ({ toShow = undefined }: Props): JSX.Element => {
	const filteredItems = useRecoilValue(filteredBookingGoodsAtom);
	const ITEMS_LENGTH = !!filteredItems.length;

	return (
		<>
			{ITEMS_LENGTH ? (
				<>
					<p className="mt-[31px] mb-1.5">
						Or quickly add from list of popular items below:
					</p>
					<ul className={styles.items}>
						{filteredItems.slice(0, toShow).map((item) => (
							<GoodItem key={item.id} goodItem={item} />
						))}
					</ul>
				</>
			) : (
				<>
					<p className="mt-[31px] mb-1.5 h-[28px]" />
					<div className={styles.items}>
						<Dynamic.NotFound
							containerStyles="my-18"
							figureStyles="max-w-[100px] xl:max-w-[240px]"
							label="Item not found"
						/>
					</div>
				</>
			)}
		</>
	);
};
