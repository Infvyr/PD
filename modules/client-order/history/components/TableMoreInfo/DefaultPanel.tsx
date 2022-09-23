import { ReactComponent as PictureIcon } from '/public/assets/images/svg/picture.svg';
import { Disclosure, Transition } from '@headlessui/react';
import styles from './TableMoreInfoDefault.module.css';

export const DefaultPanel = (): JSX.Element => (
	<Transition
		className={styles.wrapper}
		enter="transition duration-100 ease-out"
		enterFrom="transform scale-95 opacity-0"
		enterTo="transform scale-100 opacity-100"
		leave="transition duration-75 ease-out"
		leaveFrom="transform scale-100 opacity-100"
		leaveTo="transform scale-95 opacity-0"
	>
		<Disclosure.Panel>
			<div className={styles.panel}>
				<div className={styles.cell}>
					<b className={styles.label}>Task</b>
					<p className={styles.value}>Collection</p>
					<p className={styles.value}>Delivery</p>
				</div>
				<div className={styles.cell}>
					<b className={styles.label}>Scheduled Time</b>
					<p className={styles.value}>2022-07-08 (12:31-03:31)</p>
					<p className={styles.value}>2022-07-08 (12:31-03:31)</p>
				</div>
				<div className={styles.cell}>
					<b className={`${styles.label}`}>Predicted Time</b>
					<p className={styles.value}>2022-07-08 (12:31-03:31)</p>
					<p className={styles.value}>2022-07-08 (12:31-03:31)</p>
				</div>
				<div className={styles.cell}>
					<b className={styles.label}>Completed Time</b>
					<p className={styles.value}>2022-07-08 (12:31-03:31)</p>
					<p className={styles.value}>2022-07-08 (12:31-03:31)</p>
				</div>
				<div className={styles.cell}>
					<b className={styles.label}>Postcode</b>
					<p className={styles.value}>S12 2 AY</p>
					<p className={styles.value}>S12 2 AY</p>
				</div>
				<div className={styles.cell}>
					<b className={styles.label}>Email</b>
					<p className={`${styles.value} ${styles.breakWord}`}>
						jira@proovia.atlassian.net
					</p>
					<p className={`${styles.value} ${styles.breakWord}`}>
						jira@proovia.atlassian.net
					</p>
				</div>
				<div className={styles.cell}>
					<b
						className={`${styles.label} ${styles.value} ${styles.noMinHeight}`}
					>
						Phone
					</b>
					<p className={`${styles.value} ${styles.noMinHeight}`}>
						(+44) 1213149848
					</p>
					<p className={`${styles.value} ${styles.noMinHeight}`}>
						(+44) 1213149848
					</p>
				</div>
				<div className={styles.cell}>
					<b
						className={`${styles.label} ${styles.value} ${styles.noMinHeight}`}
					>
						Proof of Work
					</b>
					<div className={styles.proof}>
						<PictureIcon className="mt-0.5 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
						<PictureIcon className="mt-0.5 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
					</div>
				</div>
			</div>
		</Disclosure.Panel>
	</Transition>
);
