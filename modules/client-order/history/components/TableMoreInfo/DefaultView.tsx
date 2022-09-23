import { ReactComponent as ChevronUpIcon } from '/public/assets/images/svg/chevron-up.svg';
import { Disclosure } from '@headlessui/react';
import styles from './TableMoreInfoDefault.module.css';

type Props = {
	open: boolean;
};

export const TableMoreInfoDefault = ({ open }: Props): JSX.Element => (
	<div className={styles.btnWrapper}>
		<Disclosure.Button
			className={`${styles.btn} ${open ? styles.btnActive : ''}`}
		>
			<ChevronUpIcon
				className={open ? styles.iconActive : styles.iconDefault}
			/>
		</Disclosure.Button>
	</div>
);
