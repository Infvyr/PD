import { KEYS } from '@pd-frontend/config/keys';
import { TERMS } from '@pd-frontend/layout/page/data/terms-and-conditions';
import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { Dynamic } from '@pd-frontend/components/dynamic-export';
import { Disclosure, Transition } from '@headlessui/react';
import { ReactComponent as ChevronUpIcon } from '/public/assets/images/svg/chevron-up.svg';
import styles from '@pd-frontend/layout/page/content/PageTermsConditions.module.css';

const DynamicAdminHeader = dynamic(() => import('../layout/header/Admin'), {
	ssr: false
});
const DynamicPageHeader = dynamic(
	() => import('../layout/page/content/PageHeader'),
	{
		ssr: false
	}
);

function TermsConditionsPage() {
	return (
		<>
			<Dynamic.CustomHead
				title="Terms and conditions"
				description="Terms and conditions page"
			/>

			<div className={styles.content}>
				<div className={styles.image}>
					<DynamicPageHeader
						imgSrc={`${KEYS.CDN_URL}/images/terms.webp`}
						imgAlt="policy"
						imgWidth={350}
						imgHeight={350}
					/>
				</div>
				<h1 className={styles['page-title']}>
					Standard service terms and conditions
				</h1>

				<>
					{TERMS.map((text) => (
						<Disclosure key={text.label}>
							{({ open }) => (
								<div className="first-of-type:mt-0 last-of-type:mb-0 mb-9">
									<Disclosure.Button className=" w-full flex items-center justify-between rounded-full shadow-disclosure bg-white pl-4 pr-1 py-1 text-left text-base lg:text-[25px] font-bold transition-colors hover:bg-gray-50">
										<span className="truncate lg:text-clip w-10/12 md:w-full">
											{text.label}
										</span>
										<span className="flex-align h-10 w-10 rounded-full bg-gradient-to-b">
											<ChevronUpIcon
												className={`${
													open ? 'rotate-0 transform' : 'rotate-180 '
												}`}
											/>
										</span>
									</Disclosure.Button>
									<Transition
										enter="transition duration-100 ease-in"
										enterFrom="transform -translate-y-1 opacity-0"
										enterTo="transform translate-y-0.5 opacity-100"
										leave="transition duration-75 ease-out"
										leaveFrom="transform translate-y-0.5 opacity-100"
										leaveTo="transform -translate-y-1 opacity-0"
									>
										<Disclosure.Panel className="px-4 pt-5 sm:pb-8 text-sm text-gray-500">
											{text.body}
										</Disclosure.Panel>
									</Transition>
								</div>
							)}
						</Disclosure>
					))}
				</>
			</div>
		</>
	);
}

TermsConditionsPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DynamicAdminHeader />
			<main className="container mx-auto">{page}</main>
		</>
	);
};

export default TermsConditionsPage;
