import classnames from '@pd-frontend/styles/pages/admin.module.css';
import styles from '@pd-frontend/styles/pages/order-history.module.css';
import {
	ClientLayout,
	HeaderLayout,
	SearchInput
} from '@pd-frontend/components';
import { useMediaQuery } from '@pd-frontend/hooks';
import {
	ButtonCreateOrder,
	ButtonsAction
} from '@pd-frontend/modules/client-area';
import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { Dynamic } from '@pd-frontend/modules/client-order/history/components/dynamic-export';

const DynamicAdminHeader = dynamic(
	() => import('../../../layout/header/Admin'),
	{
		ssr: false
	}
);

function ClientOrderHistoryPage() {
	const isTabletUp = useMediaQuery('(min-width: 992px)');

	return (
		<ClientLayout cardSize={styles.cardSize} cardStyles="shadow-none">
			<HeaderLayout boxStyles="card bg-white p-2.5 rounded-full">
				<ButtonCreateOrder />
				<SearchInput
					wrapperStyles={styles.search}
					placeholder="Search orders..."
				/>
				<ButtonsAction />
			</HeaderLayout>

			<div className={`${styles.content} ${isTabletUp ? 'max-h-[720px]' : ''}`}>
				{isTabletUp ? (
					<div className={styles.defaultView}>
						<Dynamic.DefaultView />
					</div>
				) : (
					<Dynamic.MobileView />
				)}
			</div>
		</ClientLayout>
	);
}

ClientOrderHistoryPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DynamicAdminHeader backTo="/client/account" />
			<main className={classnames['auth-page']}>{page}</main>
		</>
	);
};

export default ClientOrderHistoryPage;
