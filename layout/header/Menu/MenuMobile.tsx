import { Popover, Transition } from '@headlessui/react';
import { useMediaQuery, useMenuItemScrollToSection } from '@pd-frontend/hooks';
import { MenuItems } from '@pd-frontend/layout';
import styles from './MenuMobile.module.css';

export const MenuMobile = (): JSX.Element => {
	const isMobile = useMediaQuery('(max-width: 991px)');
	const { itemUrl, scrollToSection } = useMenuItemScrollToSection();

	return (
		<>
			{isMobile && (
				<Popover as="nav" className={styles.popover}>
					{({ open }) => (
						<>
							<Popover.Button
								className={`${styles.trigger} ${open ? styles.opened : ''}`}
							>
								<svg width="40" height="36" viewBox="0 0 100 100">
									<path
										className={`${styles.line} ${styles.line1}`}
										d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
										strokeLinecap="round"
									/>
									<path
										className={`${styles.line} ${styles.line2}`}
										d="M 20,50 H 80"
										strokeLinecap="round"
									/>
									<path
										className={`${styles.line} ${styles.line3}`}
										d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
										strokeLinecap="round"
									/>
								</svg>
							</Popover.Button>

							<Transition
								className={styles.popup}
								show={open}
								enter="transition duration-100 ease-out"
								enterFrom="transform -translate-x-full opacity-0"
								enterTo="transform translate-x-0 opacity-100"
								leave="transition duration-75 ease-out"
								leaveFrom="transform translate-x-0 opacity-100"
								leaveTo="transform -translate-x-full opacity-0"
							>
								<Popover.Panel as="ul" className={styles.popContent}>
									{({ close }) => (
										<>
											{MenuItems.map((item) => (
												<li key={item.key} className={styles.li}>
													<button
														aria-label={`Scroll to ${item.label} section`}
														className={`${styles.item} ${
															item.url === itemUrl
																? styles.active
																: styles.initial
														}`}
														type="button"
														onClick={scrollToSection(item.url)}
														onFocus={() => close()}
													>
														{item.label}
													</button>
												</li>
											))}
										</>
									)}
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>
			)}
		</>
	);
};
