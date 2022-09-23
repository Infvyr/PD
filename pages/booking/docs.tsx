import { OrderConfirmationResponse } from '@pd-backend/types';
import AdminHeader from '@pd-frontend/layout/header/Admin';
import { getOrderConfirmation } from '@pd-frontend/lib';
import { useCartInfo } from '@pd-frontend/modules/booking/hooks';
import { Footer, OrderPackages } from '@pd-frontend/modules/thanks/components';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import classnames from '@pd-frontend/styles/pages/admin.module.css';
import styles from '@pd-frontend/styles/pages/order-created-template.module.css';

function BookingThanksPage() {
	const { data: cartInfo, loading } = useCartInfo();
	const [order, setOrder] = useState<OrderConfirmationResponse>();
	const fetchedOrderRef = useRef(false);

	useEffect(() => {
		if (fetchedOrderRef.current) return;
		fetchedOrderRef.current = true;

		(async () => {
			await getOrderConfirmation()
				.then((response) => setOrder(response))
				.catch((error) => console.error(error));
		})();
	}, []);

	if (loading) return <Dynamic.Loader />;

	return (
		<>
			<Dynamic.CustomHead title="Thanks" />

			<section className={styles.section}>
				<div className={styles.wrapper}>
					{cartInfo ? (
						<>
							<h1 className={styles.title}>Your order successfully created!</h1>
							{order && (
								<div className={styles.order}>
									<h2 className={styles['order-title']}>Order</h2>
									<span className={styles['order-number']}>
										# {order?.order}
									</span>
								</div>
							)}

							{order && (
								<>
									<div className={styles.message}>
										<h3 className={styles['message-title']}>
											Thank you for choosing us!
										</h3>
										<p className={styles['message-subtitle']}>
											Email was sent to your customer email address.
										</p>
									</div>

									<OrderPackages
										invoice={order?.urls.invoice}
										packageSlip={order?.urls.invoice}
										labels={order?.urls.labels}
									/>
									<Footer trackingUrl={order?.urls.trackingUrl} />
								</>
							)}
						</>
					) : (
						<Dynamic.WarningMessage message="Order not found" />
					)}
				</div>
			</section>
		</>
	);
}

BookingThanksPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<AdminHeader />
			<main className={classnames['auth-page']}>{page}</main>
		</>
	);
};

export default BookingThanksPage;
