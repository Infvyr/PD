import Link from 'next/link';

export const ButtonActiveOrders = (): JSX.Element => (
	<Link href="/client/order/active" passHref>
		<a
			title="Active orders"
			className="btn btn-sm btn-outline max-w-[200px] w-full px-2 py-1 justify-center text-primary uppercase font-bold hover:text-white focus-visible:text-white"
		>
			Active orders
		</a>
	</Link>
);
