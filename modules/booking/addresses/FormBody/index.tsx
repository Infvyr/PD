import { Disclosure, Transition } from '@headlessui/react';
import { FormFooter } from '@pd-frontend/modules/booking';
import { PropsWithChildren } from 'react';
import styles from './style.module.css';

export const FormBody = ({ children }: PropsWithChildren): JSX.Element => {
	return (
		<Transition
			enter="transition duration-100 ease-in"
			enterFrom="transform -translate-y-1 opacity-0"
			enterTo="transform translate-y-0.5 opacity-100"
			leave="transition duration-75 ease-out"
			leaveFrom="transform translate-y-0.5 opacity-100"
			leaveTo="transform -translate-y-1 opacity-0"
		>
			<Disclosure.Panel className={styles['disclosure-body']}>
				<div className={styles['location-details']}>
					<ul className={styles.options}>{children}</ul>
				</div>
				<FormFooter />
			</Disclosure.Panel>
		</Transition>
	);
};
