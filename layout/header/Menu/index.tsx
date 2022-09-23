import { useMediaQuery, useMenuItemScrollToSection } from '@pd-frontend/hooks';
import { MenuItems } from '@pd-frontend/layout';
import styles from './style.module.css';

export const Menu = (): JSX.Element => {
	const { itemUrl, scrollToSection } = useMenuItemScrollToSection();
	const isDesktop = useMediaQuery('(min-width: 992px)');

	return (
		<>
			{isDesktop && (
				<nav>
					<ul className={styles.ul}>
						{MenuItems.map((item) => (
							<li key={item.key}>
								<button
									aria-label={`Scroll to ${item.label} section`}
									className={`${styles.item} ${
										item.url === itemUrl ? styles.active : styles.initial
									}`}
									type="button"
									onClick={scrollToSection(item.url)}
								>
									{item.label}
								</button>
							</li>
						))}
					</ul>
				</nav>
			)}
		</>
	);
};
