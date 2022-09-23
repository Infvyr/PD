import classnames from '@pd-frontend/modules/client-order/history/components/TableBody/MobileView/style.module.css';
import styles from './style.module.css';

export const Items = (): JSX.Element => {
	return (
		<ul className={classnames.text}>
			<li className={styles.li}>TV Stabd-1 pcs</li>
			<li className={styles.li}>Lorem ipsum dolor sit amet</li>
		</ul>
	);
};
