import { ReactComponent as UserIcon } from '/public/assets/images/svg/user.svg';
import { ReactComponent as AddressIcon } from '/public/assets/images/svg/addresses.svg';
import { ReactComponent as OrderIcon } from '/public/assets/images/svg/order-history.svg';
import { Page } from '@pd-frontend/layout/page/client/account-page/interface';

export const ACCOUNT_PAGES: Page[] = [
	{
		icon: <UserIcon className="w-4 h-4 group-hover:hover-path-white" />,
		label: 'My details',
		url: '/client/details'
	},
	{
		icon: <OrderIcon className="group-hover:hover-path-white" />,
		label: 'Order History',
		url: '/client/order/history'
	},
	{
		icon: <AddressIcon className="group-hover:hover-path-white" />,
		label: 'My Addresses',
		url: '/client/addresses'
	},
	{
		icon: (
			<span className="text-primary font-light group-hover:text-white">%</span>
		),
		label: 'My discount',
		url: '/client/discount'
	}
];
