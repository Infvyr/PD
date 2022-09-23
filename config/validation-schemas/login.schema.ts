import { email, password } from '@pd-frontend/config/validation-schemas/common';
import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
	email: email,
	password: password
});
