import { GoodCategory } from '@pd-backend/types';
import { cartObject } from '@pd-frontend/modules/booking/features/cart/cart.state';
import styles from '@pd-frontend/styles/pages/booking/categories-template.module.css';
import { Button } from '@pd-frontend/components/Button';
import {
	GoodsCategories,
	Search
} from '@pd-frontend/modules/booking/categories/components';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { ReactComponent as ChevronIcon } from '/public/assets/images/svg/chevron-left.svg';

type Props = {
	categories: GoodCategory[];
	itemsComponent: ReactNode;
};

export const CategoryPage = ({ categories, itemsComponent }: Props) => {
	const router = useRouter();
	const { containsAddedItem } = useRecoilValue(cartObject);

	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.inner}>
					<div className={styles.sidebar}>
						<h3 className={styles['sidebar-title']}>Categories</h3>
						<div className={styles['sidebar-inner']}>
							<GoodsCategories categories={categories} />
						</div>
					</div>

					<div className={styles.content}>
						<h1 className={styles['content-title']}>
							Which item do you need to deliver?
						</h1>

						<Search />
						{itemsComponent}
					</div>
				</div>

				<div className="text-center mt-[57px] mb-4">
					<Button
						aria-label="Go to next page"
						type="button"
						label="Continue"
						className={`btn btn-sm ${containsAddedItem ? '' : 'btn-ghost'}`}
						disabled={!containsAddedItem}
						onClick={() => router.push('/booking/plans')}
					>
						<ChevronIcon className="rotate-180" />
					</Button>
				</div>
			</div>
		</section>
	);
};
