import {
	email,
	name,
	password,
	confirmPassword,
	phone
} from '@pd-frontend/config/validation-schemas/common';
import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
	name: name,
	email: email,
	password: password,
	confirmPassword: confirmPassword,
	phone: phone,
	terms: yup
		.boolean()
		.oneOf(
			[true],
			'It is essential to accept our Terms and Conditions to register'
		)
});
