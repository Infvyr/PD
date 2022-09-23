import DefaultHeader from '@pd-frontend/layout/header/Default';
import { clearStorage } from '@pd-frontend/utils/clear-storage';
import { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Dynamic } from '@pd-frontend/components/dynamic-export';

const DynamicSectionBooking = dynamic(() => import('../layout/home/booking'), {
	ssr: false
});
const DynamicSectionTrackOrder = dynamic(
	() => import('../layout/home/trackOrder'),
	{
		ssr: false
	}
);
const DynamicSectionWhyChooseUs = dynamic(
	() => import('../layout/home/whyChooseUs'),
	{
		ssr: false
	}
);
const DynamicSectionTestimonials = dynamic(
	() => import('../layout/home/testimonials'),
	{
		ssr: false
	}
);
const DynamicSectionServices = dynamic(
	() => import('../layout/home/services'),
	{
		ssr: false
	}
);
const DynamicSectionAbout = dynamic(() => import('../layout/home/about'), {
	ssr: false
});
const DynamicSectionContact = dynamic(() => import('../layout/home/contact'), {
	ssr: false
});

const IndexStyles = `.top{padding-top: 158px;}@media (max-width: 991px){.top{padding-top: 77px}}`;

function IndexPage() {
	useEffect(() => clearStorage.cart(), []);

	return (
		<>
			<Head>
				<style id="home-page">{IndexStyles}</style>
				<title>Proovia Delivery</title>
			</Head>
			<Dynamic.CustomHead description="Proovia delivery description" />

			<DynamicSectionBooking />
			<DynamicSectionTrackOrder />
			<DynamicSectionWhyChooseUs />
			<DynamicSectionTestimonials />
			<DynamicSectionServices />
			<DynamicSectionAbout />
			<DynamicSectionContact />
		</>
	);
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DefaultHeader />
			<main className="top">{page}</main>
		</>
	);
};

export default IndexPage;
