import { Mail, Phone } from '@pd-frontend/layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Prefooter.module.css';

type MenuItems = {
	key: string;
	label: string;
	url: string;
};

enum FooterType {
	default = 'default',
	content = 'content'
}

const items: MenuItems[] = [
	{
		key: 't&c',
		label: 'Terms & Conditions',
		url: '/terms-and-conditions'
	},
	{
		key: 'privacy',
		label: 'Privacy Policy',
		url: '/privacy-policy'
	},
	{
		key: 'faq',
		label: 'FAQ',
		url: '/faq'
	}
];

const Prefooter = (): JSX.Element => {
	const [footer, setFooter] = useState<FooterType>(FooterType.default);
	const router = useRouter();

	useEffect(() => {
		if (items.map((item) => item.url).includes(router.pathname)) {
			setFooter(FooterType.content);
		} else {
			setFooter(FooterType.default);
		}
	}, [router.pathname]);

	return (
		<>
			{footer === FooterType.default ? (
				<div className={styles['prefooter-default']}>
					<div className="container mx-auto">
						<ul className="flex-align gap-5 md:gap-14">
							{items.map((item) => (
								<li key={item.key}>
									<Link href={item.url} passHref>
										<a
											title={item.label}
											className={`bg-link-effect-1 ${styles['prefooter-default-link']}`}
										>
											{item.label}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			) : (
				<div className={styles.prefooter}>
					<div className="container mx-auto !px-4">
						<ul className={styles.ul}>
							<Mail
								mail="support@proovia.co.uk"
								iconClass={styles['prefooter-icon']}
							/>
							<Phone
								number="(+44) 1213149848"
								iconClass={styles['prefooter-icon']}
							/>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default Prefooter;
