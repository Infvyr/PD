import { email, otpCode } from '@pd-frontend/config/validation-schemas/common';
import * as yup from 'yup';

export const ClientMailSettingsSchema = yup.object().shape({
	email: email,
	otpCode: otpCode
});
