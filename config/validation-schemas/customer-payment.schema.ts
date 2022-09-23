import {
	email,
	name,
	phone
} from '@pd-frontend/config/validation-schemas/common';
import * as yup from 'yup';

export const CustomerPaymentSchema = yup.object().shape({
	email: email,
	fullName: name,
	phone: phone,
	terms: yup
		.boolean()
		.oneOf([true], 'It is essential to accept our Terms and Conditions')
});
