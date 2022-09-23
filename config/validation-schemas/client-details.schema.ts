import { name, email } from '@pd-frontend/config/validation-schemas/common';
import * as yup from 'yup';

export const ClientDetailsSchema = yup.object().shape({
	name: name,
	email: email
});
