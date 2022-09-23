import {
	ButtonCreateOrder,
	ButtonsAction
} from '@pd-frontend/modules/client-area';
import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { ClientLayout, HeaderLayout } from '@pd-frontend/components';
import classnames from '@pd-frontend/styles/pages/admin.module.css';
import styles from '@pd-frontend/styles/pages/client-discount-template.module.css';

const DynamicAdminHeader = dynamic(
	() => import('../../../layout/header/Admin'),
	{
		ssr: false
	}
);

function ClientDiscountPage() {
	return (
		<ClientLayout cardStyles="bg-white">
			<HeaderLayout>
				<ButtonCreateOrder />
				<ButtonsAction />
			</HeaderLayout>

			<div className={styles.body}>
				<header className={styles.header}>
					<span className={styles.icon}>%</span>
					<h1 className={styles['page-title']}>My discount</h1>
				</header>

				<h2 className={styles.lg}>
					Current discount:&nbsp;
					<b className={`${styles.accent} ${styles.percent}`}>10%</b>
				</h2>

				<h3 className={styles.subtitle}>
					Reach <b className={styles.accent}>Discount</b> for next month through
					a combination of <b className={styles.accent}>Orders + Amount</b>
				</h3>
			</div>
		</ClientLayout>
	);
}

ClientDiscountPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DynamicAdminHeader backTo="/client/account" />
			<main className={classnames['auth-page']}>{page}</main>
		</>
	);
};

export default ClientDiscountPage;
