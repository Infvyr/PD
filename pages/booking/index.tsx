import { CartItemState } from '@pd-frontend/interfaces/cart/interfaces';
import { cartTotalPrice } from '@pd-frontend/modules/booking/features/cart/cart-total-price';
import { useCartInfo } from '@pd-frontend/modules/booking/hooks';
import { useCartPrice } from '@pd-frontend/modules/booking/hooks/cart/useCartPrice';
import classnames from '@pd-frontend/styles/pages/admin.module.css';
import AdminHeader from '@pd-frontend/layout/header/Admin';
import { getGoods, getGoodsCategories } from '@pd-frontend/lib';
import {
	CategoryPage,
	Goods
} from '@pd-frontend/modules/booking/categories/components';
import { bookingGoodsAtom } from '@pd-frontend/modules/booking/features/cart/category.state';
import { importNamedComponent } from '@pd-frontend/utils/dynamic-named-import';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { ReactElement, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot, useRecoilState } from 'recoil';
import { Dynamic } from '@pd-frontend/components/dynamic-export';

const DynamicImport = {
	Cart: dynamic(
		() => importNamedComponent(import('@pd-frontend/modules/booking'), 'Cart'),
		{
			ssr: false
		}
	)
};

function BookingCategoriesPage({
	categories,
	goodItems
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const { data: cartInfo, loading } = useCartInfo();
	const { cartPrice } = useCartPrice();
	const [, setGoodItems] = useRecoilState(bookingGoodsAtom);
	const [totalPrice, setCartTotalPrice] = useRecoilState(cartTotalPrice);

	useEffect(() => {
		setGoodItems(
			goodItems?.data.map((goodItem: CartItemState) => ({
				...goodItem,
				inCart: false,
				qty: 0
			}))
		);
	}, [goodItems, setGoodItems]);

	useEffect(() => {
		if (!totalPrice.price) {
			setCartTotalPrice(cartPrice);
		}
	}, [cartPrice, setCartTotalPrice, totalPrice.price]);

	if (loading) return <Dynamic.Loader />;

	return (
		<>
			<Dynamic.CustomHead title="Booking" />
			{cartInfo ? (
				<CategoryPage categories={categories} itemsComponent={<Goods />} />
			) : (
				<Dynamic.WarningMessage />
			)}
		</>
	);
}

BookingCategoriesPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<AdminHeader />
			<main className={classnames['auth-page']}>
				<RecoilRoot>
					{page}
					<DynamicImport.Cart />
					<Toaster position="bottom-left" reverseOrder={false} />
				</RecoilRoot>
			</main>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const categories = await getGoodsCategories();
	const goodItems = await getGoods();

	return {
		props: {
			categories,
			goodItems
		},
		revalidate: 60
	};
};

export default BookingCategoriesPage;
