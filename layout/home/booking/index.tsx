import {
	vehicle,
	vehicleTransition
} from '@pd-frontend/animations/booking-home';
import { Loader } from '@pd-frontend/components';
import { KEYS } from '@pd-frontend/config/keys';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import styles from './style.module.css';

const DynamicBookingWrapper = dynamic(
	() => import('../../../modules/booking/components/Wrapper'),
	{
		loading: () => <Loader wrapperStyle="h-[120px] mt-[5rem]" />
	}
);

const SectionBooking = (): JSX.Element => (
	<section id="booking" className={styles.section}>
		<LazyMotion features={domAnimation}>
			<m.div
				variants={vehicle}
				initial="hidden"
				animate="show"
				transition={vehicleTransition}
				className={styles['left-image']}
			>
				<Image
					src={`${KEYS.CDN_URL}/images/van.webp`}
					height={540}
					width={900}
					alt="van"
				/>
			</m.div>
		</LazyMotion>

		<div className={styles['right-image']}>
			<Image
				src={`${KEYS.CDN_URL}/images/furniture.webp`}
				width={399}
				height={496}
				alt="furniture"
			/>
		</div>

		<div className={styles.wrapper}>
			<div className={styles.content}>
				<h1 className={styles.title}>
					<span>You pick the location,</span>
					<span className={styles['title-second-line']}>
						we will take care of the rest
					</span>
				</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
					suspendisse ultrices gravida.
				</p>

				<DynamicBookingWrapper />
			</div>
		</div>
	</section>
);

export default SectionBooking;
