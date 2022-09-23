import { ReactElement } from 'react';
import dynamic from 'next/dynamic';

const DynamicAdminHeader = dynamic(
	() => import('../../../layout/header/Admin'),
	{
		ssr: false
	}
);

function ActiveOrderPage() {
	return <h1>Active Order Page</h1>;
}

ActiveOrderPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DynamicAdminHeader backTo="/client/account" />
			<main>{page}</main>
		</>
	);
};

export default ActiveOrderPage;
