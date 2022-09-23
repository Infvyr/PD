import { useMediaQuery } from '@pd-frontend/hooks/useMediaQuery';
import {
	Logo,
	Menu,
	MenuMobile,
	Profile,
	Support,
	TopBar
} from '@pd-frontend/layout';
import { useEffect, useState } from 'react';
import styles from './DefaultHeader.module.css';

const DefaultHeader = (): JSX.Element => {
	const isMobile = useMediaQuery('(max-width: 991px)');
	const [sticky, setSticky] = useState<string>('');

	const isSticky = () => {
		const scrollTop = window.scrollY;
		const stickyClass = scrollTop >= 400 ? styles.sticky : '';
		setSticky(stickyClass);
	};

	useEffect(() => {
		window.addEventListener('scroll', isSticky);
		return () => window.removeEventListener('scroll', isSticky);
	}, []);

	return (
		<div id="default-header" className={styles.default}>
			{isMobile ? <div data-section="top" /> : <TopBar />}
			<div className={`${styles.wrapper} ${sticky}`}>
				<header className={styles.header}>
					<MenuMobile />
					<Logo />
					<Menu />
					<div className={styles.buttons}>
						<Profile />
						<Support />
					</div>
				</header>
			</div>
		</div>
	);
};

export default DefaultHeader;
