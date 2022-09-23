import { CartItemState } from '@pd-frontend/interfaces/cart/interfaces';
import { useCartInfo } from '@pd-frontend/modules/booking/hooks';
import classnames from '@pd-frontend/styles/pages/admin.module.css';
import AdminHeader from '@pd-frontend/layout/header/Admin';
import { getGoods, getGoodsCategories } from '@pd-frontend/lib';
import {
	CategoryPage,
	Goods
} from '@pd-frontend/modules/booking/categories/components';
import { bookingGoodsAtom } from '@pd-frontend/modules/booking/features/cart/category.state';
import { importNamedComponent } from '@pd-frontend/utils/dynamic-named-import';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
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

function BookingCategoryPage({
	categories,
	goodItems
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const { data: cartInfo, loading } = useCartInfo();
	const [, setGoodItems] = useRecoilState(bookingGoodsAtom);
	const router = useRouter();
	const catName = router.query?.catName as string;

	useEffect(() => {
		setGoodItems(
			goodItems?.data.map((goodItem: CartItemState) => ({
				...goodItem,
				inCart: false,
				qty: 0
			}))
		);
	}, [catName, goodItems, setGoodItems]);

	if (loading) return <Dynamic.Loader />;

	return (
		<>
			<Dynamic.CustomHead title="Category page" />
			{cartInfo ? (
				<CategoryPage categories={categories} itemsComponent={<Goods />} />
			) : (
				<Dynamic.WarningMessage />
			)}
		</>
	);
}

BookingCategoryPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<AdminHeader backTo="/booking" />
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

export const getStaticProps: GetStaticProps = async (context) => {
	const categoryID = context.params?.catId as string;
	const categories = await getGoodsCategories();
	const goodItems = await getGoods(+categoryID);

	return {
		props: {
			categories,
			goodItems
		},
		revalidate: 60
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const categories = await getGoodsCategories();

	const paths = categories.map((category) => ({
		params: { catId: `${category.id}` }
	}));

	return { paths, fallback: false };
};

export default BookingCategoryPage;
