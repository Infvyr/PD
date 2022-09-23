import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

const COOKIE_NOTICE_KEY = 'pd_cookie_notice';
const checkInBrowser = typeof window !== 'undefined';

const PrivacyPolicyLink = () => (
	<Link href="/privacy-policy" passHref>
		<a title="Privacy Policy" target="_blank" className={styles.link}>
			Privacy Policy
		</a>
	</Link>
);

export const CookieNotice = () => {
	const [isNoticeActive, setIsNoticeActive] = useState<boolean>(true);

	useEffect(() => {
		let isCookieActive = checkInBrowser
			? window.localStorage.getItem(COOKIE_NOTICE_KEY)
			: '';
		if (isCookieActive !== null) setIsNoticeActive(JSON.parse(isCookieActive));
	}, []);

	useEffect(
		() =>
			window.localStorage.setItem(
				COOKIE_NOTICE_KEY,
				JSON.stringify(isNoticeActive)
			),
		[isNoticeActive]
	);

	const handleButtonClick = () => setIsNoticeActive(false);

	return isNoticeActive ? (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<p>
					We use cookie to offer you a better experience, analyze site traffic
					and serve targeted advertisements.
				</p>
				<b>
					By continuing to use this site, you consent to the use of cookies in
					accordance with our <PrivacyPolicyLink />.
				</b>
			</div>
			<button
				type="button"
				aria-label="Accept Proovia Delivery cookie consent"
				className={`btn btn-sm ${styles.btn}`}
				onClick={handleButtonClick}
			>
				Accept cookies
			</button>
		</div>
	) : null;
};
