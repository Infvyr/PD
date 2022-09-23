import { yupResolver } from '@hookform/resolvers/yup';
import { BookingApi } from '@pd-frontend/api/booking';
import {
	Button,
	FormCheckbox,
	FormInput,
	PhoneNumberInput
} from '@pd-frontend/components';
import { KEYS } from '@pd-frontend/config/keys';
import { CustomerPaymentSchema } from '@pd-frontend/config/validation-schemas/customer-payment.schema';
import { CustomerPaymentDetails } from '@pd-frontend/interfaces/CustomerPaymentDetails';
import { cartTotalPrice } from '@pd-frontend/modules/booking/features/cart/cart-total-price';
import { TotalPrice } from '@pd-frontend/modules/checkout/components';
import { clearStorage } from '@pd-frontend/utils/clear-storage';
import { setBlurDataUrl } from '@pd-frontend/utils/shimmer';
import { showErrorToast } from '@pd-frontend/utils/show-toast';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRecoilValue } from 'recoil';
import styles from '@pd-frontend/styles/pages/payment-template.module.css';

const DynamicCardSection = dynamic(
	() => import('@pd-frontend/modules/checkout/components/CardSection'),
	{
		ssr: false
	}
);

export const CheckoutForm = () => {
	const router = useRouter();
	const stripe = useStripe();
	const elements = useElements();
	const isUserLoggedIn = false;
	const totalAmount = useRecoilValue(cartTotalPrice);

	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors, isSubmitting, isValid }
	} = useForm<CustomerPaymentDetails>({
		mode: 'onChange',
		resolver: yupResolver(CustomerPaymentSchema)
	});

	const fieldErrors = {
		nameError: errors.fullName?.message,
		emailError: errors.email?.message,
		phoneError: errors.phone?.message,
		termsError: errors.terms?.message
	};

	const onSubmit: SubmitHandler<CustomerPaymentDetails> = async ({
		fullName,
		email,
		phone,
		terms
	}) => {
		if (!stripe || !elements) {
			return;
		}

		const cardElement = elements.getElement(CardElement);
		if (!cardElement) {
			return;
		}

		try {
			const bookingApi = new BookingApi();
			const customerDetailsValues = {
				fullName,
				email,
				phone,
				metadata: { terms }
			};
			const billing_details = {
				name: fullName,
				email,
				phone
			};

			// update cart with customer details
			await bookingApi.updateCart(customerDetailsValues);

			const create = await stripe.createPaymentMethod({
				type: 'card',
				card: cardElement,
				billing_details
			});

			if (create.error) {
				showErrorToast(create.error.message, 'stripe.createPaymentMethod');
			} else {
				const { data } = await bookingApi.createPayment(totalAmount?.price);
				const { clientSecret, paymentIntentId, orderId } = data;

				if (data) {
					const confirm = await stripe.confirmCardPayment(clientSecret, {
						payment_method: {
							card: cardElement,
							billing_details
						}
					});

					if (confirm.error) {
						showErrorToast(confirm.error.message, 'stripe.confirmCardPayment');
					} else {
						if (confirm.paymentIntent.status === 'succeeded') {
							toast.success('Payment successfully executed!');

							await bookingApi
								.confirmPayment(paymentIntentId, totalAmount?.price, orderId)
								.then(() => {
									cardElement.clear();
									reset();
									clearStorage.cart();

									router.replace('/booking/additional-details');
								});
						}
					}
				}
			}
		} catch (error) {
			showErrorToast(error, 'onSubmit');
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{isUserLoggedIn ? (
				<div className="md:h-12" />
			) : (
				<div className={styles.details}>
					<h3 className={styles.title}>Customer Details</h3>
					<div className="col-span-2">
						<FormInput
							wrapperHeightClassName="h-11"
							name="fullName"
							placeholder="Full Name"
							type="text"
							register={register}
							error={fieldErrors.nameError}
							className={`${styles.inputD} ${styles.name}`}
						/>
					</div>

					<div className="col-span-2 md:col-span-1">
						<FormInput
							wrapperHeightClassName="h-11"
							name="email"
							placeholder="Email"
							type="email"
							register={register}
							error={fieldErrors.emailError}
							className={styles.inputD}
						/>
					</div>

					<div className="col-span-2 md:col-span-1">
						<Controller
							control={control}
							name="phone"
							rules={{ required: true }}
							render={({ field: { ref, ...field } }) => (
								<PhoneNumberInput
									{...field}
									phoneError={fieldErrors.phoneError}
									value={field.value}
									onChange={field.onChange}
									inputClass={styles.phone}
									errorWrapperHeight="h-11"
								/>
							)}
						/>
					</div>
				</div>
			)}

			<div className="mb-[18px]">
				<TotalPrice />
			</div>

			<DynamicCardSection />

			<div className={styles.consent}>
				<FormCheckbox
					wrapperHeightClassName="min-h-[44px]"
					wrapperStyles=""
					error={fieldErrors.termsError}
					register={register}
					name="terms"
					id="terms"
					ariaLabel="Agree to the terms and conditions"
				>
					<span className="mr-1" aria-hidden>
						I agree to the
					</span>
					<Link href="/terms-and-conditions" passHref>
						<a
							title="Terms and conditions"
							className="underline text-primary hover:text-secondary"
							target="_blank"
						>
							Terms & Conditions
						</a>
					</Link>
				</FormCheckbox>
				<div className={styles.payments}>
					<Image
						src={`${KEYS.CDN_URL}/images/payments.webp`}
						width={122}
						height={20}
						alt="payment methods"
						placeholder="blur"
						blurDataURL={setBlurDataUrl(122, 20)}
					/>
				</div>
			</div>
			<Button
				aria-label="Create order"
				label="Create Order"
				className="btn btn-sm btn-form flex-align gap-2 px-2"
				isLoading={isSubmitting}
				isValid={isValid}
				disabled={isSubmitting || !isValid || !stripe}
			/>
		</form>
	);
};
