import { PricePlan, PricePlanTotalPrice } from '@pd-backend/types';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import styles from '@pd-frontend/styles/pages/booking/program-template.module.css';
import { toPounds } from '@pd-frontend/utils/price-format';

type Props = {
	loadingPrice: boolean;
	planPrices: PricePlanTotalPrice[];
	plan: PricePlan;
	enabled: boolean;
};

export const PlanFooter = (props: Props) => {
	const { loadingPrice, planPrices, plan, enabled } = props;

	if (loadingPrice) {
		return (
			<footer className={styles.footer}>
				<Dynamic.Loader
					spinnerStyle={styles.spinnerStyle}
					widthStyle="w-12"
					heightStyle="h-12"
				/>
			</footer>
		);
	}

	if (!enabled) {
		return <footer className={styles.footer}>-</footer>;
	}

	return (
		<footer className={styles.footer}>
			{planPrices?.map((val) =>
				plan.id === val.id ? toPounds(val.price, 2) : null
			)}
		</footer>
	);
};
