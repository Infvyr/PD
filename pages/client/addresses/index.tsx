import { ClientLayout, HeaderLayout } from '@pd-frontend/components';
import AdminHeader from '@pd-frontend/layout/header/Admin';
import { Navigation } from '@pd-frontend/modules/client-addresses/components';
import {
	ButtonCreateOrder,
	ButtonsAction
} from '@pd-frontend/modules/client-area';
import { ReactElement, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import classnames from '@pd-frontend/styles/pages/admin.module.css';
import styles from '@pd-frontend/styles/pages/client-addresses-template.module.css';

const DynamicCollection = dynamic(
	() =>
		import(
			'@pd-frontend/modules/client-addresses/components/ListOfAddress/Collection'
		),
	{
		suspense: true
	}
);

const DynamicDelivery = dynamic(
	() =>
		import(
			'@pd-frontend/modules/client-addresses/components/ListOfAddress/Delivery'
		),
	{
		suspense: true
	}
);

function ClientAddressesPage() {
	return (
		<ClientLayout cardStyles="bg-white">
			<HeaderLayout>
				<ButtonCreateOrder />
				<h1 className="text-primary font-bold text-center text-xl xl:text-2xl order-4 w-full sm:order-2 sm:w-fit">
					My Addresses
				</h1>
				<ButtonsAction />
			</HeaderLayout>

			<div className={styles.body}>
				<div className={styles.layout}>
					<div className={styles.card}>
						<div className={styles['card-inner']}>
							<Navigation />
							<Suspense fallback={<Dynamic.Loader />}>
								<DynamicCollection />
							</Suspense>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles['card-inner']}>
							<Navigation title="Address To" />
							<Suspense fallback={<Dynamic.Loader />}>
								<DynamicDelivery />
							</Suspense>
						</div>
					</div>
				</div>
			</div>
		</ClientLayout>
	);
}

ClientAddressesPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<AdminHeader backTo="/client/account" />
			<main className={classnames['auth-page']}>{page}</main>
			<Toaster position="bottom-left" reverseOrder={false} />
		</>
	);
};

export default ClientAddressesPage;
