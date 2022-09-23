import { PricePlan } from '@pd-backend/types';
import { BookingApi } from '@pd-frontend/api/booking';
import { Button } from '@pd-frontend/components';
import { BACKEND_DATE_FORMAT } from '@pd-frontend/config/dates';
import AdminHeader from '@pd-frontend/layout/header/Admin';
import { getPlans } from '@pd-frontend/lib';
import {
	PlanBody,
	PlanFooter,
	PlanHeader,
	ProgramDialog
} from '@pd-frontend/modules/booking';
import {
	planAtom,
	plansPricesAtom,
	pricePlanAtom,
	selectPlanAtom
} from '@pd-frontend/modules/booking/features/plans/plan.state';
import {
	useCartInfo,
	useDateSlots,
	usePlanFeatures,
	usePricePlan
} from '@pd-frontend/modules/booking/hooks';
import { useCollectionDates } from '@pd-frontend/modules/booking/hooks/plans/useCollectionDates';
import { useDeliveryDates } from '@pd-frontend/modules/booking/hooks/plans/useDeliveryDates';
import { importNamedComponent } from '@pd-frontend/utils/dynamic-named-import';
import { showErrorToast } from '@pd-frontend/utils/show-toast';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { ReactElement, useState, useEffect } from 'react';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import format from 'date-fns/format';
import { ReactComponent as ChevronIcon } from '/public/assets/images/svg/chevron-left.svg';
import { ReactComponent as CheckIcon } from '/public/assets/images/svg/check-selected.svg';
import classnames from '@pd-frontend/styles/pages/admin.module.css';
import styles from '@pd-frontend/styles/pages/booking/program-template.module.css';

const DynamicImport = {
	Cart: dynamic(
		() => importNamedComponent(import('@pd-frontend/modules/booking'), 'Cart'),
		{
			ssr: false
		}
	)
};

function BookingPlansPage({
	plans
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const [plan, setPlan] = useRecoilState(planAtom);
	const selectPlan = useRecoilValue(selectPlanAtom);
	const planPrice = useRecoilValue(pricePlanAtom);
	const [plansPrices, setPlansPrices] = useRecoilState(plansPricesAtom);
	const { isOpen, openModal, closeModal, handleSelectPlan, updateCartPrice } =
		usePlanFeatures();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const router = useRouter();

	const { data: cartInfo, loading } = useCartInfo();
	const { data: planPrices, loading: loadingPrice } = usePricePlan();
	const { setSlots, slots } = useDateSlots();
	const { data: collectionDates } = useCollectionDates();
	const collectDate = (plan.economyCollection.date &&
		format(
			new Date(plan.economyCollection.date as string),
			BACKEND_DATE_FORMAT
		)) as string;
	const { data: deliveryDates } = useDeliveryDates(collectDate);

	const PRICE_PLANS: PricePlan[] = Object.values(plans);
	const planIdSelected = plan.pricePlanId;
	const selectedPlan = selectPlan.isSelected;
	const isEmptyEconomyDeliveryDate = plan.economyDelivery.date?.length === 0;

	const planValuesToUpdate = {
		collection: {
			...(plan.pricePlanId === 1
				? {
						date: plan.economyCollection.date,
						tripId: plan.economyCollection.tripId,
						tripDays: plan.economyCollection.tripDays,
						isFavoriteDate: plan.economyCollection.isFavorite
				  }
				: {
						date: plan.collection.date,
						tripId: plan.collection.tripId,
						tripDays: plan.collection.tripDays,
						isFavoriteDate: plan.collection.isFavorite
				  })
		},
		delivery: {
			...(plan.pricePlanId === 1
				? {
						date: plan.economyDelivery.date,
						tripId: plan.economyDelivery.tripId,
						tripDays: plan.economyDelivery.tripDays,
						isFavoriteDate: plan.economyDelivery.isFavorite
				  }
				: {
						date: plan.delivery.date,
						tripId: plan.delivery.tripId,
						tripDays: plan.delivery.tripDays,
						isFavoriteDate: plan.delivery.isFavorite
				  })
		}
	};

	const onSubmit = async () => {
		try {
			setIsLoading(true);
			const bookingApi = new BookingApi();

			if (planValuesToUpdate.delivery.date) {
				const response = await bookingApi.updateCart(planValuesToUpdate);
				if (response?.data) {
					router.push('/booking/checkout');
				}
			} else {
				showErrorToast('Please, choose the dates', 'onSubmit plans');
			}
		} catch (error) {
			showErrorToast(error, 'onClickContinue:Plan');
		} finally {
			setIsLoading(false);
		}
	};

	// save plans prices in recoil state
	useEffect(() => {
		if (planPrices) {
			setPlansPrices(planPrices);
		}
	}, [planPrices]);

	// save collection date and slot in state after getting collection slots
	useEffect(() => {
		if (collectionDates) {
			let economyCollection = collectionDates.find((date) => date.isFavorite);

			setSlots({
				...slots,
				collectionDates: collectionDates.map((d) =>
					new Date(d.date).toISOString()
				),
				collectionSlots: collectionDates.map((res) => ({
					tripId: res?.tripId,
					tripDays: res?.tripDays,
					isFavorite: res?.isFavorite,
					date: new Date(res?.date).toDateString()
				}))
			});

			setPlan({
				...plan,
				economyCollection: {
					...plan.economyCollection,
					date: economyCollection?.date,
					tripId: economyCollection?.tripId,
					tripDays: economyCollection?.tripDays,
					isFavorite: economyCollection?.isFavorite
				}
			});
		}
	}, [collectionDates]);

	// save delivery date in state after doing collection-slots request
	useEffect(() => {
		if (deliveryDates) {
			let economyDelivery = deliveryDates[0];

			setPlan({
				...plan,
				economyDelivery: {
					...plan.economyDelivery,
					date: economyDelivery?.date,
					tripId: economyDelivery?.tripId,
					tripDays: economyDelivery?.tripDays,
					isFavorite: economyDelivery?.isFavorite
				}
			});
		}
	}, [deliveryDates]);

	if (loading) return <Dynamic.Loader />;

	return (
		<>
			<Dynamic.CustomHead title="Booking plans" />

			<section className={styles.section}>
				<div className={styles['page-container']}>
					{cartInfo ? (
						<>
							<h1 className={styles.title}>
								Choose the most convenient program
							</h1>
							<div className={styles.content}>
								{!!PRICE_PLANS.length &&
									PRICE_PLANS.map((plan) => {
										let disabledEconomy =
											plan.id === 1 && isEmptyEconomyDeliveryDate;
										let disabledPlan =
											plan.isEnabled && !disabledEconomy ? '' : styles.disabled;

										return (
											Object.keys(plan).length !== 0 && (
												<div key={plan.id}>
													<div
														data-id={plan.id}
														className={`${styles.program} ${disabledPlan}`}
														aria-label={`Select ${plan.name} plan`}
														tabIndex={0}
														role={plan.calendar ? 'dialog' : 'button'}
														onClick={
															plan.calendar
																? openModal(
																		plan.id,
																		plan.calendar,
																		plan.isEnabled
																  )
																: handleSelectPlan(plan.id)
														}
														onClickCapture={() => updateCartPrice(plan.id)}
														title={`Select ${plan.name} Plan`}
													>
														{planIdSelected === plan.id && selectedPlan && (
															<CheckIcon className={styles.checked} />
														)}

														<PlanHeader name={plan.name} />
														<PlanBody
															alt={plan.name}
															description={plan.description}
															imgUrl={plan.icon}
															planType={plan.name}
														/>
														<PlanFooter
															loadingPrice={loadingPrice}
															planPrices={plansPrices}
															plan={plan}
															enabled={plan.isEnabled && !disabledEconomy}
														/>
													</div>

													<ProgramDialog
														price={planPrice.price}
														closeModal={closeModal}
														isOpen={isOpen}
													/>
												</div>
											)
										);
									})}

								<div className="col-span-3 text-center">
									<Button
										aria-label="Go to next page"
										label="Continue"
										className={`btn btn-sm justify-center gap-x-2 mx-auto ${
											planIdSelected ? '' : 'btn-ghost'
										}`}
										disabled={!planIdSelected}
										type="button"
										onClick={onSubmit}
										isLoading={isLoading}
									>
										<ChevronIcon className="rotate-180 order-1" />
									</Button>
								</div>
							</div>
						</>
					) : (
						<Dynamic.WarningMessage />
					)}
				</div>
			</section>
		</>
	);
}

BookingPlansPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<AdminHeader backTo="/booking" />
			<RecoilRoot>
				<main className={classnames['auth-page']}>{page}</main>
				<Toaster position="bottom-left" reverseOrder={false} />
				<DynamicImport.Cart />
			</RecoilRoot>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const plans = await getPlans();

	return {
		props: {
			plans
		},
		revalidate: 60
	};
};

export default BookingPlansPage;
