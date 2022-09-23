import { ReactComponent as ChevronIcon } from '/public/assets/images/svg/chevron-left.svg';
import { Button, IconButton } from '@pd-frontend/components';
import { Dynamic } from '@pd-frontend/modules/booking/dynamic-export';
import { calendarAtom } from '@pd-frontend/modules/booking/features/calendar/calendar.state';
import { toPounds } from '@pd-frontend/utils/price-format';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ReactComponent as CloseIcon } from '/public/assets/images/svg/close.svg';
import { useRecoilValue } from 'recoil';
import styles from './style.module.css';

type DialogProps = {
	price: number | undefined;
	isOpen: boolean;
	closeModal: () => void;
};

const PlanPrice = ({ totalPrice }: { totalPrice: number }) => {
	return (
		<>
			<p className={styles['price-label']}>Price:</p>
			<span className={styles['price-value']}>{toPounds(totalPrice)}</span>
		</>
	);
};

export const ProgramDialog = ({ price, isOpen, closeModal }: DialogProps) => {
	const calendarValues = useRecoilValue(calendarAtom);
	const hasEmptyDates = !calendarValues.isButtonActive;

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className={styles.dialog} onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className={styles.overlay} />
				</Transition.Child>

				<div className={styles['dialog-wrapper']}>
					<div className={styles['dialog-inner']}>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className={styles.panel}>
								<div className={styles['panel-inner']}>
									<IconButton
										ariaLabel="Close"
										icon={<CloseIcon />}
										onClick={closeModal}
									/>
								</div>
								<Dialog.Title as="h3" className={styles['panel-title']}>
									Select the date of collection and delivery
								</Dialog.Title>

								<div className={styles.calendar}>
									<Dynamic.RangeCalendar />
								</div>

								<footer className={styles.footer}>
									<div className={styles['footer-inner']}>
										{price && <PlanPrice totalPrice={price} />}
									</div>

									<Button
										aria-label="Close calendar"
										type="button"
										label="Continue"
										className={`btn btn-sm gap-x-1 ${
											hasEmptyDates
												? 'btn-ghost hover:bg-none cursor-not-allowed'
												: ''
										}`}
										disabled={hasEmptyDates}
										onClick={closeModal}
									>
										<ChevronIcon className="rotate-180" />
									</Button>
								</footer>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};
