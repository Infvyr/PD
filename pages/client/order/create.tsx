import { ReactElement } from 'react';
import dynamic from 'next/dynamic';

const DynamicAdminHeader = dynamic(
	() => import('../../../layout/header/Admin'),
	{
		ssr: false
	}
);

function CreateOrderPage() {
	return <h1>Create Order Page</h1>;
}

CreateOrderPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DynamicAdminHeader backTo="/client/account" />
			<main>{page}</main>
		</>
	);
};

export default CreateOrderPage;
