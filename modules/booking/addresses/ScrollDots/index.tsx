import styles from './style.module.css';

type Props = {
	wrapperStyles?: string;
	inverted?: boolean;
};

export const ScrollDots = ({ wrapperStyles, inverted }: Props): JSX.Element => (
	<div className={`${styles.dots} ${wrapperStyles ?? ''}`}>
		<span className={`${inverted ? styles.dotUp : styles.dot}`} />
		<span className={`${inverted ? styles.dotUp : styles.dot}`} />
		<span className={`${inverted ? styles.dotUp : styles.dot}`} />
	</div>
);
