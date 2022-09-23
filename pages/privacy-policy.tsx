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

function PrivacyPolicyPage() {
	return (
		<>
			<Dynamic.CustomHead
				title="Privacy Policy"
				description="Privacy Policy page"
			/>

			<div className={styles.content}>
				<DynamicPageHeader
					imgSrc={`${KEYS.CDN_URL}/images/policy.webp`}
					imgAlt="policy"
					imgWidth={350}
					imgHeight={350}
				/>
				<h1 className={styles['page-title']}>Privacy policy</h1>

				<h2 className={styles.title}>Our Cookie Policy</h2>
				<p>
					Cookies are an important part of almost all online companies these
					days, and this page describes what they are, how we use them, what
					data they collect, and most importantly, how you can change your
					browser settings to turn them off.
				</p>

				<h2 className={styles.title}>What Are Cookies</h2>
				<p>
					As is common practice with almost all professional websites this site
					uses cookies, which are tiny files that are downloaded to your
					computer, to improve your experience. This page describes what
					information they gather, how we use it and why we sometimes need to
					store these cookies. We will also share how you can prevent these
					cookies from being stored however this may downgrade or ‘break’
					certain elements of the sites functionality.
				</p>

				<h2 className={styles.title}>How We Use Cookies</h2>
				<p>
					We use cookies for a variety of reasons detailed below. Unfortunately
					in most cases there are no industry standard options for disabling
					cookies without completely disabling the functionality and features
					they add to this site. It is recommended that you leave on all cookies
					if you are not sure whether you need them or not in case they are used
					to provide a service that you use.
				</p>

				<h2 className={styles.title}>Disabling Cookies</h2>
				<p>
					You can prevent the setting of cookies by adjusting the settings on
					your browser (see your browser Help for how to do this). Be aware that
					disabling cookies will affect the functionality of this and many other
					websites that you visit. Disabling cookies will usually result in also
					disabling certain functionality and features of the this site.
					Therefore it is recommended that you do not disable cookies.
				</p>

				<h2 className={styles.title}>The Cookies We Set</h2>
				<ul>
					<li>Orders processing related cookies.</li>
					<li>
						This site offers e-commerce or payment facilities and some cookies
						are essential to ensure that your order is remembered between pages
						so that we can process it properly.
					</li>
					<li>Forms related cookies.</li>
					<li>
						When you submit data to through a form such as those found on
						contact pages or comment forms cookies may be set to remember your
						user details for future correspondence.
					</li>
					<li>Site preferences cookies.</li>
					<li>
						In order to provide you with a great experience on this site we
						provide the functionality to set your preferences for how this site
						runs when you use it. In order to remember your preferences we need
						to set cookies so that this information can be called whenever you
						interact with a page is affected by your preferences.
					</li>
				</ul>

				<h2 className={styles.title}>Third Party Cookies</h2>
				<p>
					In some special cases we also use cookies provided by trusted third
					parties. The following section details which third party cookies you
					might encounter through this site.
				</p>
				<ul>
					<li>
						This site uses Google Analytics which is one of the most widespread
						and trusted analytics solution on the web for helping us to
						understand how you use the site and ways that we can improve your
						experience. These cookies may track things such as how long you
						spend on the site and the pages that you visit so we can continue to
						produce engaging content.
					</li>
					<li>
						For more information on Google Analytics cookies, see the official
						Google Analytics page.
					</li>
					<li>
						Third party analytics are used to track and measure usage of this
						site so that we can continue to produce engaging content. These
						cookies may track things such as how long you spend on the site or
						pages you visit which helps us to understand how we can improve the
						site for you.
					</li>
				</ul>

				<p>
					Blocking all cookies will have a negative impact upon the usability of
					many websites. If you block cookies, you will not be able to use all
					the features on our website.
				</p>
			</div>
		</>
	);
}

PrivacyPolicyPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<DynamicAdminHeader />
			<main className="container mx-auto">{page}</main>
		</>
	);
};

export default PrivacyPolicyPage;
