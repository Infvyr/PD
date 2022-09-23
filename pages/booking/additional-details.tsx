import { yupResolver } from '@hookform/resolvers/yup';
import { BookingApi } from '@pd-frontend/api/booking';
import { CustomerDetailsSchema } from '@pd-frontend/config/validation-schemas/customer-details.schema';
import { CustomerDetails } from '@pd-frontend/interfaces/CustomerDetails.interface';
import AdminHeader from '@pd-frontend/layout/header/Admin';
import {
	CollectionDetails,
	DeliveryDetails,
	Footer,
	NumberOfPieces,
	PageHeader,
	ReferenceLabel
} from '@pd-frontend/modules/additional-details/components';
import { useCartInfo } from '@pd-frontend/modules/booking/hooks';
import { showErrorToast } from '@pd-frontend/utils/show-toast';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import classnames from '@pd-frontend/styles/pages/admin.module.css';
import styles from '@pd-frontend/styles/pages/additional-details-template.module.css';

const TEMP_UNAVAILABLE = false;

function BookingAdditionalDetailsPage() {
	const [isVisibleCollection, setIsVisibleCollection] =
		useState<boolean>(false);
	const [isVisibleDelivery, setIsVisibleDelivery] = useState<boolean>(false);

	const { data: cartInfo, loading } = useCartInfo();
	const router = useRouter();

	const customerDetails = {
		fullName: cartInfo?.fullName,
		email: cartInfo?.email,
		phone: cartInfo?.phone
	};

	const {
		register,
		handleSubmit,
		reset,
		control,
		setValue,
		formState,
		formState: { errors, isSubmitting, isValid }
	} = useForm<CustomerDetails>({
		mode: 'onChange',
		resolver: yupResolver(CustomerDetailsSchema),
		defaultValues: {}
	});

	const fieldErrors = {
		collectionFullNameError: errors.collectionFullName?.message,
		collectionEmailError: errors.collectionEmail?.message,
		collectionPhoneError: errors.collectionPhone?.message,
		deliveryFullNameError: errors.deliveryFullName?.message,
		deliveryEmailError: errors.deliveryEmail?.message,
		deliveryPhoneError: errors.deliveryPhone?.message,
		nrOfPiecesError: errors.numberOfPieces?.message,
		referenceLabelError: errors.referenceLabel?.message
	};

	const onSubmit: SubmitHandler<CustomerDetails> = async (data) => {
		const formValues = {
			collection: {
				fullName: data?.collectionFullName.trim(),
				email: data?.collectionEmail.trim(),
				phone: data?.collectionPhone.trim()
			},
			delivery: {
				fullName: data?.deliveryFullName.trim(),
				email: data?.deliveryEmail.trim(),
				phone: data?.deliveryPhone.trim()
			},
			numberOfPieces: data.numberOfPieces ? +data.numberOfPieces : undefined,
			referenceLabel: data?.referenceLabel || undefined
		};

		try {
			const bookingApi = new BookingApi();
			await bookingApi.updateCart(formValues);
			router.push('/booking/docs');
		} catch (error) {
			showErrorToast(error, 'onSubmit additional-details');
		} finally {
			setIsVisibleCollection(false);
			setIsVisibleDelivery(false);
		}
	};

	const onChangeCollectionDetails = () => {
		setIsVisibleCollection((prevState) => !prevState);
		if (!isVisibleCollection) {
			setValue('collectionFullName', customerDetails.fullName as string, {
				shouldDirty: true,
				shouldValidate: true
			});
			setValue('collectionEmail', customerDetails.email as string, {
				shouldDirty: true,
				shouldValidate: true
			});
			setValue('collectionPhone', customerDetails.phone as string, {
				shouldDirty: true,
				shouldValidate: true
			});
		} else {
			setValue('collectionFullName', '');
			setValue('collectionEmail', '');
			setValue('collectionPhone', '');
		}
	};

	const onChangeDeliveryDetails = () => {
		setIsVisibleDelivery((prevState) => !prevState);
		if (!isVisibleDelivery) {
			setValue('deliveryFullName', customerDetails.fullName as string, {
				shouldDirty: true,
				shouldValidate: true
			});
			setValue('deliveryEmail', customerDetails.email as string, {
				shouldDirty: true,
				shouldValidate: true
			});
			setValue('deliveryPhone', customerDetails.phone as string, {
				shouldDirty: true,
				shouldValidate: true
			});
		} else {
			setValue('deliveryFullName', '');
			setValue('deliveryEmail', '');
			setValue('deliveryPhone', '');
		}
	};

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset();
		}
	}, [formState, reset]);

	if (loading) return <Dynamic.Loader />;

	return (
		<>
			<Dynamic.CustomHead
				title="Booking Additional Details"
				description="Customer additional details"
			/>

			<section className={styles.section}>
				<div className={styles.wrapper}>
					{cartInfo ? (
						<>
							<PageHeader />
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className={styles.details}>
									<CollectionDetails
										register={register}
										fieldErrors={fieldErrors}
										control={control}
										customerDetails={customerDetails}
										isVisible={isVisibleCollection}
										handleOnChange={onChangeCollectionDetails}
									/>
									<DeliveryDetails
										register={register}
										fieldErrors={fieldErrors}
										control={control}
										customerDetails={customerDetails}
										isVisible={isVisibleDelivery}
										handleOnChange={onChangeDeliveryDetails}
									/>
								</div>

								{TEMP_UNAVAILABLE && (
									<div className="space-y-4 mb-11 md:mb-[68px]">
										<NumberOfPieces
											register={register}
											fieldErrors={fieldErrors}
										/>
										<ReferenceLabel
											register={register}
											fieldErrors={fieldErrors}
										/>
									</div>
								)}

								<Footer isSubmitting={isSubmitting} isValid={isValid} />
							</form>
						</>
					) : (
						<Dynamic.WarningMessage message="Order not found" />
					)}
				</div>
			</section>
		</>
	);
}

BookingAdditionalDetailsPage.getLayout = function getLayout(
	page: ReactElement
) {
	return (
		<>
			<AdminHeader />
			<main className={classnames['auth-page']}>{page}</main>
			<Toaster position="bottom-left" reverseOrder={false} />
		</>
	);
};

export default BookingAdditionalDetailsPage;
