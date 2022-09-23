import { DATE_FORMAT } from '@pd-frontend/config/dates';
import { KEYS } from '@pd-frontend/config/keys';
import AdminHeader from '@pd-frontend/layout/header/Admin';
import { useCartInfo } from '@pd-frontend/modules/booking/hooks';
import {
	BusinessInterval,
	CheckoutForm,
	PaymentHeader,
	Postcode
} from '@pd-frontend/modules/checkout/components';
import { AddressType } from '@pd-frontend/modules/checkout/components/Postcode/enum';
import { importNamedComponent } from '@pd-frontend/utils/dynamic-named-import';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import format from 'date-fns/format';
import classnames from '@pd-frontend/styles/pages/admin.module.css';
import styles from '@pd-frontend/styles/pages/payment-template.module.css';

const DynamicImport = {
	Cart: dynamic(
		() => importNamedComponent(import('@pd-frontend/modules/booking'), 'Cart'),
		{
			ssr: false
		}
	)
};

const stripePromise = loadStripe(KEYS.STRIPE_PUBLISHABLE_KEY);

function BookingCheckoutPage() {
	const { data: cartInfo, loading } = useCartInfo();

	const PAYMENT = {
		collection: {
			date:
				cartInfo?.collection.date &&
				format(new Date(cartInfo?.collection?.date), DATE_FORMAT),
			postcode: cartInfo?.collection.postcode,
			district: cartInfo?.collection.district,
			address: cartInfo?.collection.address
		},
		delivery: {
			date:
				cartInfo?.delivery.date &&
				format(new Date(cartInfo?.delivery?.date), DATE_FORMAT),
			postcode: cartInfo?.delivery.postcode,
			district: cartInfo?.delivery.district,
			address: cartInfo?.delivery.address
		}
	};

	if (loading) return <Dynamic.Loader />;

	return (
		<>
			<Dynamic.CustomHead title="Checkout" />

			{cartInfo ? (
				<section className={styles.section}>
					<div className={styles.wrapper}>
						<div className={styles.content}>
							<PaymentHeader />
							<div className="grid grid-cols-2 gap-5 pb-9">
								<div className="col-span-2">
									<BusinessInterval
										collectionDate={PAYMENT.collection.date as string}
										deliveryDate={PAYMENT.delivery.date as string}
									/>
								</div>
								<div className="col-span-2 md:col-span-1">
									<Postcode
										type={AddressType.COLLECTION}
										postcode={PAYMENT.collection.postcode as string}
										address={PAYMENT.collection.address as string}
										district={PAYMENT.collection.district as string}
									/>
								</div>
								<div className="col-span-2 md:col-span-1">
									<Postcode
										type={AddressType.DELIVERY}
										postcode={PAYMENT.delivery.postcode as string}
										address={PAYMENT.delivery.address as string}
										district={PAYMENT.delivery.district as string}
									/>
								</div>
							</div>

							<Elements stripe={stripePromise}>
								<CheckoutForm />
							</Elements>
						</div>
					</div>
				</section>
			) : (
				<Dynamic.WarningMessage />
			)}
		</>
	);
}

BookingCheckoutPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<AdminHeader backTo="/booking/plans" />
			<RecoilRoot>
				<main className={classnames['auth-page']}>{page}</main>
				<Toaster position="bottom-left" reverseOrder={false} />
				<DynamicImport.Cart />
			</RecoilRoot>
		</>
	);
};

export default BookingCheckoutPage;
