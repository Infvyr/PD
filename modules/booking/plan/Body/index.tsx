import { PlanDates } from '@pd-frontend/modules/booking';
import { setBlurDataUrl } from '@pd-frontend/utils/shimmer';
import Image from 'next/image';
import styles from '@pd-frontend/modules/booking/plan/Body/styles.module.css';

type Props = {
	imgUrl: string;
	alt: string;
	description: string;
	planType: string;
};

export const PlanBody = (props: Props) => {
	const { imgUrl, alt, description, planType } = props;

	return (
		<div className={styles['plan-body']}>
			<Image
				src={imgUrl}
				width={220}
				height={150}
				alt={alt}
				placeholder="blur"
				blurDataURL={setBlurDataUrl(150, 150)}
			/>
			<p className={styles['plan-description']}>{description}</p>
			<PlanDates planType={planType} />
		</div>
	);
};
