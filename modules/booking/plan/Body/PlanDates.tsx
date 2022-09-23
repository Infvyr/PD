import { planAtom } from '@pd-frontend/modules/booking/features/plans/plan.state';
import { ChooseDates } from '@pd-frontend/modules/booking/plan/Body/ChooseDates';
import { Dates } from '@pd-frontend/modules/booking/plan/Body/Dates';
import { formatDate } from '@pd-frontend/utils/date-format';
import { useRecoilValue } from 'recoil';

type Props = {
	planType: string;
};

export const PlanDates = ({ planType }: Props) => {
	const plan = useRecoilValue(planAtom);
	const economyPlan = planType === 'Economy';
	const businessPlan = planType === 'Business';
	const firstClassPlan = planType === 'First class';
	const hasDeliveryProperties = Object.keys(plan.delivery).length > 0;

	const collectionDate =
		planType === 'Economy'
			? formatDate(plan.economyCollection.date as string)
			: formatDate(plan.collection.date as string);

	const deliveryDate =
		planType === 'Economy'
			? formatDate(plan.economyDelivery.date as string)
			: formatDate(plan.delivery.date as string);

	return (
		<>
			{economyPlan && (
				<Dates
					collectionDate={collectionDate as string}
					deliveryDate={deliveryDate as string}
				/>
			)}

			{businessPlan ? (
				<>
					{plan.pricePlanId === 2 && hasDeliveryProperties ? (
						<Dates
							collectionDate={collectionDate as string}
							deliveryDate={deliveryDate as string}
						/>
					) : (
						<ChooseDates />
					)}
				</>
			) : null}

			{firstClassPlan ? (
				<>
					{plan.pricePlanId === 3 && hasDeliveryProperties ? (
						<Dates
							collectionDate={collectionDate as string}
							deliveryDate={deliveryDate as string}
						/>
					) : (
						<ChooseDates />
					)}
				</>
			) : null}
		</>
	);
};
