import Link from 'next/link';
import styles from './style.module.css';

type Props = {
	trackingUrl: string;
};

export const Footer = ({ trackingUrl }: Props): JSX.Element => (
	<footer className={styles.footer}>
		<Link href={trackingUrl} passHref>
			<a
				title="Track your order"
				target="_blank"
				className="btn btn-sm"
				rel="nofollow noreferrer noopener"
			>
				Track your order!
			</a>
		</Link>
	</footer>
);
