import { Tab } from '@headlessui/react';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import { calendarStyle } from '@pd-frontend/modules/booking/calendar/calendar-styles';
import { options } from '@pd-frontend/modules/booking/calendar/config';
import { calendarAtom } from '@pd-frontend/modules/booking/features/calendar/calendar.state';
import { useDateSlots } from '@pd-frontend/modules/booking/hooks';
import { showErrorToast } from '@pd-frontend/utils/show-toast';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styles from '@pd-frontend/modules/booking/calendar/styles.module.css';

const DynamicDatepicker = dynamic(() => import('react-datepicker'), {
	ssr: false
});

export const RangeCalendar = () => {
	const [calendar, setCalendar] = useRecoilState(calendarAtom);
	const {
		setCollectionData,
		gatherDeliveryData,
		slots,
		isLoadingDates,
		setIsLoadingDates,
		errMessage
	} = useDateSlots();
	const [startDate, setStartDate] = useState<Date | null>(new Date());
	const [endDate, setEndDate] = useState<Date | null>(new Date());
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onChangeCollection = async (dates: [Date | null, Date | null]) => {
		try {
			setIsLoadingDates(true);
			const [start, end] = dates;
			const hasSelectedDates = Boolean(end);
			setStartDate(start);
			setEndDate(end);
			setCalendar({ ...calendar, isButtonActive: hasSelectedDates });

			await setCollectionData(start, end).then(() => setSelectedIndex(1));
			await gatherDeliveryData(end);
		} catch (error) {
			showErrorToast(error, 'onDateChange');
		} finally {
			setIsLoadingDates(false);
		}
	};

	const onChangeDelivery = (dates: [Date | null, Date | null]) => {
		const [, end] = dates;
		const hasSelectedDates = Boolean(end);
		setEndDate(end);
		setCalendar({ ...calendar, isButtonActive: hasSelectedDates });
		gatherDeliveryData(end);
	};

	return (
		<>
			<style>{calendarStyle}</style>

			<Tab.Group selectedIndex={selectedIndex}>
				<Tab.List as="header" className={styles.legend}>
					<Tab className={styles['legend-item']}>
						<span className={`${styles['legend-item-box']} ${styles.orange}`} />
						<span title="Set collection date">collection date</span>
					</Tab>
					<Tab className={styles['legend-item']} disabled={selectedIndex === 0}>
						<span className={`${styles['legend-item-box']} ${styles.green}`} />
						<span title="Set delivery date">delivery date</span>
					</Tab>
				</Tab.List>

				<Tab.Panels className={`${styles.wrapper} relative`}>
					{isLoadingDates && (
						<Dynamic.Loader
							wrapperStyle="absolute top-0 left-0 w-full h-full  after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-[10px] after:bg-zinc-50"
							spinnerStyle="z-[1]"
						/>
					)}
					{errMessage && (
						<p className="error-message !text-base h-full flex-align">
							{errMessage}
						</p>
					)}
					<Tab.Panel>
						<div className="collect">
							<DynamicDatepicker
								{...options}
								fixedHeight
								selectsStart
								selectsRange
								calendarClassName={styles.calendar}
								selected={startDate}
								startDate={startDate}
								endDate={endDate}
								onChange={onChangeCollection}
								includeDates={slots.collectionDates.map((d) => new Date(d))}
							/>
						</div>
					</Tab.Panel>

					<Tab.Panel>
						<div className="delivery">
							<DynamicDatepicker
								{...options}
								fixedHeight
								selectsEnd
								selectsRange
								calendarClassName={styles.calendar}
								selected={startDate}
								startDate={startDate}
								endDate={endDate}
								onChange={onChangeDelivery}
								includeDates={slots.deliveryDates?.map((d) => new Date(d))}
							/>
						</div>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</>
	);
};
