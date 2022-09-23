import { email } from '@pd-frontend/config/validation-schemas/common';
import * as yup from 'yup';

export const ResetPasswordSchema = yup.object({
	email: email
});
