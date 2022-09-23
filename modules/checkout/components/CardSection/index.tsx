import { CardElement } from '@stripe/react-stripe-js';
import styles from './style.module.css';

const StyledStripeContainer = `
  .StripeElement{
    position: relative;
    top: 4px;
  }
`;

const CARD_ELEMENT_OPTIONS = {
	hidePostalCode: true,
	style: {
		base: {
			color: '#595A59',
			fontSize: '16px',
			fontFamily: 'Calibri, system-ui',
			fontSmoothing: 'antialiased',
			'::placeholder': { color: 'rgba(89, 90, 89, .65)' }
		},
		invalid: {
			color: '#B53133'
		}
	}
};

const CardSection = (): JSX.Element => {
	return (
		<>
			<style>{StyledStripeContainer}</style>

			<div className={styles.stripe}>
				<CardElement options={CARD_ELEMENT_OPTIONS} />
			</div>
		</>
	);
};

export default CardSection;
