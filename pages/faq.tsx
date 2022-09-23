import { KEYS } from '@pd-frontend/config/keys';
import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import styles from '@pd-frontend/layout/page/content/PageContent.module.css';

const DynamicAdminHeader = dynamic(() => import('../layout/header/Admin'), {
	ssr: false
});
const DynamicPageHeader = dynamic(
	() => import('../layout/page/content/PageHeader'),
	{
		ssr: false
	}
);

function FAQPage() {
	return (
		<>
			<Dynamic.CustomHead title="FAQ" description="Faq page" />

			<div className={styles.content}>
				<DynamicPageHeader
					imgSrc={`${KEYS.CDN_URL}/images/faq.webp`}
					imgAlt="policy"
					imgWidth={350}
					imgHeight={350}
				/>
				<h1 className={`!normal-case !mb-[29px] ${styles['page-title']}`}>
					How it works?
				</h1>
				<h2 className="mb-5 text-primary text-[22px] font-bold">
					We are more than happy to explain and guide you.
				</h2>
				<h3 className="mb-4 font-bold text-[19px]">
					1. Just fill the form and we receive a request from you.
				</h3>
				<p className="mb-4">
					1.1 Make sure that you have added all necessary details for it.-
					Dates.
				</p>
				<ul className="mb-10 px-6 list-disc">
					<li className="mb-4">
						We will love to know about specific dates 2-3 in advance.
					</li>
					<li className="mb-4">
						We are based in Birmingham, so there are 2 day-routes for us due to
						physical-geographical specifics. - Addresses (postcodes) for
						collection and delivery
					</li>
					<li className="mb-4">
						If one of the addresses is business, please mention that so we get
						into working hours.
					</li>
					<li className="mb-4">
						If any additional information for collection is required, such as
						lot # or name, kindly provide it. - Contact details for collection
						and delivery including e-mails and phone numbers. - Item description
						including dimensions.- Payment type. We accept bank transfers,
						debit/credit cards, cash on delivery/collection.
					</li>
					<li className="mb-4">
						Please let us know who is responsible for the payment so we contact
						the right person.
					</li>
					<li className="mb-4">
						Online payment is required to be processed on the day before
						delivery. - Leave in secure place option.
					</li>
					<li className="mb-4">
						Meaning, that we can take the item from secure place (collection) or
						leave it in secure place on delivery if you wish.
					</li>
					<li className="mb-4">
						A short-description for our courier where the item is left or should
						be left.
					</li>
				</ul>
				<h3 className="mb-4 font-bold text-[19px]">
					2. Our customer support processes your request and our logisticians
					add your order on the route.
				</h3>
				<h4 className={styles['text-danger']}>
					! Routes are created specifically everyday and are finished at noon
					time.
				</h4>
				<ul className="mb-5 px-6 list-disc">
					<li>
						Logisticians create the best routes that consider all customers and
						fit their needs.
					</li>
				</ul>
				<h4 className={styles['text-danger']}>
					! We send 3 hour time-slot at noon time when routes are finished
				</h4>
				<h5 className="mb-4">2.1 On a day before collection.</h5>
				<h4 className={styles['text-danger']}>
					! We send 3 hour time-slot for collection point.
				</h4>
				<ul className="mb-5 px-6 list-disc">
					<li>
						That time-slot needs to be confirmed when received till the end of
						the day by collection point so we can process the task.
					</li>
				</ul>
				<h5 className="mb-4">2.2 Collection day.</h5>
				<h4 className={styles['text-danger']}>
					! Our couriers come and collect the item.
				</h4>
				<h5 className="mb-4">2.3 On a day before delivery.</h5>
				<h4 className={styles['text-danger']}>
					! We provide 3 hours time-slot for delivery point.
				</h4>
				<ul className="mb-5 px-6 list-disc">
					<li>
						That time-slot needs to be confirmed when received till the end of
						the day by delivery point so we can process the task.
					</li>
				</ul>
				<h5 className="mb-4">2.4 Delivery day.</h5>
				<h4 className={styles['text-danger']}>
					! Our couriers come and deliver the item.
				</h4>
				<h3 className={`mt-[43px] !mb-10 text-center ${styles['text-danger']}`}>
					It’s really that simple!
				</h3>
				<h2 className="mb-6 md:my-10 inline-block w-full text-secondary text-center font-bold text-3xl md:text-[40px] leading-normal">
					Why it works like that?
				</h2>

				<p className="mb-5">
					As time and caution is the most important and valuable factor in such
					industry we are doing our best to make sure it is followed correctly.
					Moreover, we want you, our customer to be aware of the process as we
					appreciate your opinion and care about your attitude to us. We really
					want to answer your questions and want you to understand the service
					you buy from us.
				</p>
				<h4 className="mb-4 text-primary font-bold">
					Why 2-day trips work like that?
				</h4>
				<p className="mb-4">
					Some routes to Scotland and far parts of England are done in advance
					(2-3 days before the actual task/job) because of physical-geographical
					and effectiveness factors. This is done because it takes 2 days for
					our couriers to process all the tasks/jobs they got on the trip. *
					Usually, the 1st day of 2-day trip is only deliveries.
				</p>
				<ul className="mb-5 px-6 list-disc">
					<li>
						Courier needs to empty the van in order to make collections on the
						2nd day of 2-day trip and leave area with full van.
					</li>
				</ul>
				<p className="mb-4 text-secondary">
					! This means effective trip that serves as much as possible amount of
					customers. You may also remember the distance and other factors such
					as road and amount of orders in the area. It is the normal standard in
					the industry and plays a huge role in logistics. An example below:The
					collection is in Scotland, Inverness. Today is 20st of July.When we
					book customer in we shall inform him that since it is 2 day trip for
					us, we will come on 22nd or 23rd (As well, pay attention here. 22nd OR
					23rd of July.
				</p>
				<ul className="mb-5 px-6 list-disc">
					<li>
						We know the exact date when we come closer to the dates mentioned as
						it depends on the progress of our courier.
					</li>
				</ul>
				<h4 className="mb-4 text-primary font-bold">
					Why we require online payment a day before delivery till 8 PM?
				</h4>
				<p className="mb-4">
					We require online payment to be processed a day before delivery to
					avoid fraud and scam.
				</p>
				<ul className="mb-5 px-6 list-disc">
					<li>
						You receive your invoice automatically. From the invoice you are
						able to pay. But the most important factor is time. If delay happens
						with one order the whole route suffers. Meaning that the time-slot
						will be shifted for each customer on that route.
					</li>
				</ul>
				<h4 className="mb-4 text-primary font-bold">
					How does the tracking system works?
				</h4>
				<p className="mb-4">
					At the moment the tracking system shows the update every time any
					action applies to your order. Meaning, that if your order was
					collected, you receive the update. But what if that’s a delivery
					day?For example, your order is 4th on the route. Each time the driver
					completes the previous order, you see the progress on the tracking.
				</p>

				<h4 className="mb-4 text-primary font-bold">
					Why my order was rescheduled?
				</h4>
				<p className="mb-4">
					It rarely happens that the orders gets rescheduled. Most common reason
					– the lack of details required to process the task.
				</p>

				<p className="mb-4 text-secondary">
					! As well, since order is connected to the whole route, it could be
					the other case. Our customers might change their plans or ask us to
					make any changes. We always do our best to consider everyone’s desire
					and keep it’s planned as it should be. For example, one of the
					customers on the route got changes in plans, he or she is not
					available for delivery. Or, we were not even warned about that. How
					it’s connected with your order?! Let’s imagine that you had a
					collection. Since one of deliveries was cancelled, the courier will
					not have space to collect the order. However, there is no need to
					worry. We always put the orders that were not processed as scheduled
					as priority for the next 2-3 days.
				</p>
			</div>
		</>
	);
}

FAQPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DynamicAdminHeader />
			<main className="container mx-auto">{page}</main>
		</>
	);
};

export default FAQPage;
