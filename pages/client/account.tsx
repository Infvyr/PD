import { Button, ClientLayout, HeaderLayout } from '@pd-frontend/components';
import { useAuth } from '@pd-frontend/hooks';
import {
	ButtonActiveOrders,
	PageItem
} from '@pd-frontend/layout/page/client/account-page/components';
import { ACCOUNT_PAGES } from '@pd-frontend/layout/page/client/account-page/data';
import {
	ButtonCreateOrder,
	ButtonsAction
} from '@pd-frontend/modules/client-area';
import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';
import styles from '@pd-frontend/styles/pages/account-template.module.css';
import classnames from '@pd-frontend/styles/pages/admin.module.css';
import { ReactComponent as ClientAccountImage } from '/public/assets/images/svg/client-account.svg';

const DynamicAdminHeader = dynamic(() => import('../../layout/header/Admin'), {
	ssr: false
});

function AccountPage() {
	const {
		onSignOut,
		getUserProfile,
		isLoading,
		isLoadingProfile,
		userProfile
	} = useAuth();

	return (
		<ClientLayout cardStyles="bg-white">
			<HeaderLayout boxStyles="!justify-end sm:!justify-between">
				<ButtonCreateOrder customClassName="!hidden sm:!flex" />
				<ButtonsAction />
			</HeaderLayout>

			<div className={styles.body}>
				<figure className={styles.header}>
					<ClientAccountImage />
				</figure>
				<ButtonCreateOrder customClassName={styles['btn-create-order']} />
				<ButtonActiveOrders />
			</div>

			<div className={styles.pages}>
				{ACCOUNT_PAGES.map(({ label, icon, url }) => (
					<PageItem key={label} icon={icon} url={url} label={label} />
				))}
			</div>

			<div className="flex gap-x-10">
				<Button
					label="Sign Out"
					className="btn btn-sm"
					onClick={onSignOut}
					isLoading={isLoading}
				/>

				<Button
					label="Fetch user profile"
					className="btn btn-sm"
					onClick={getUserProfile}
					isLoading={isLoadingProfile}
				/>
			</div>

			{userProfile && JSON.stringify(userProfile, null, 4)}
		</ClientLayout>
	);
}

AccountPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DynamicAdminHeader />
			<main className={classnames['auth-page']}>{page}</main>
			<Toaster position="bottom-left" reverseOrder={false} />
		</>
	);
};

export default AccountPage;
