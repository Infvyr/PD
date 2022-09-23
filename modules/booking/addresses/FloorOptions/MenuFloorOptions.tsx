import { Fragment, MouseEvent } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { MenuOptions } from '@pd-frontend/modules/booking/addresses/FloorOptions/options';
import { ReactComponent as ChevronDownIcon } from '/public/assets/images/svg/dropdown-chevron.svg';
import styles from '@pd-frontend/modules/booking/addresses/FloorOptions/style.module.css';

type Props = {
	isSelected: boolean;
	selected: string;
	setOption: (evt: MouseEvent<HTMLButtonElement>) => void;
};

export const MenuFloorOptions = ({
	isSelected,
	selected,
	setOption
}: Props) => {
	return (
		<>
			<Menu as="div" className={styles.menu}>
				{({ open }) => (
					<>
						<div className={isSelected ? styles.selected : ''}>
							<Menu.Button
								className={`${styles.menuBtn} ${
									isSelected
										? styles.menuItemsBtnActive
										: styles.menuItemsBtnInactive
								}`}
							>
								<span className={styles.menuBtnText}>{selected}</span>
								<Chevron open={open} />
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className={styles.menuItems}>
								{MenuOptions.map((menuItem) => (
									<Menu.Item key={menuItem.id}>
										{({ active }) => (
											<button
												type="button"
												data-option={menuItem.value}
												className={`${
													active
														? styles.menuItemsBtnActive
														: styles.menuItemsBtnInactive
												} ${styles.menuItemsBtn}`}
												onClick={setOption}
											>
												{menuItem.name}
											</button>
										)}
									</Menu.Item>
								))}
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
		</>
	);
};

type ChevronProps = {
	open: boolean;
};

function Chevron({ open }: ChevronProps) {
	return (
		<ChevronDownIcon
			className={`${styles.menuBtnIcon} ${
				open ? styles.menuBtnIconDefault : ''
			}`}
			aria-hidden="true"
		/>
	);
}
