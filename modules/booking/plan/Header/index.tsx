import styles from '@pd-frontend/modules/booking/plan/Header/styles.module.css';

type Props = { name: string };

export const PlanHeader = ({ name }: Props) => {
	return (
		<header className={styles.header}>
			<h3 className={styles['header-title']}>{name}</h3>
		</header>
	);
};
