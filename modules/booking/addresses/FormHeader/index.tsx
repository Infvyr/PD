import { Disclosure } from '@headlessui/react';
import { ReactComponent as ChevronUpIcon } from '/public/assets/images/svg/chevron-up.svg';
import { ReactComponent as PinIcon } from '/public/assets/images/svg/pin.svg';
import styles from './style.module.css';

type Props = {
	open: boolean;
	suggestion: string;
	addressId: string;
	selectAddress: (address: string, postcode: string) => void;
};

export const FormHeader = ({
	open,
	suggestion,
	addressId,
	selectAddress
}: Props): JSX.Element => {
	return (
		<Disclosure.Button
			onClick={() => selectAddress(suggestion, addressId)}
			className={styles['disclosure-header']}
		>
			<span
				className={styles['disclosure-title']}
				tabIndex={0}
				aria-label={suggestion}
			>
				<PinIcon className={styles.pin} />
				{suggestion}
			</span>

			<span
				className={`${styles['disclosure-icon']} ${
					open ? styles['is-disclosure-icon-opened'] : ''
				}`}
			>
				<ChevronUpIcon className={styles.icon} />
			</span>
		</Disclosure.Button>
	);
};
