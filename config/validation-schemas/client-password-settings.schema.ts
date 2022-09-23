import {
	otpCode,
	password,
	confirmPassword
} from '@pd-frontend/config/validation-schemas/common';
import * as yup from 'yup';

export const ClientPasswordSettingsSchema = yup.object().shape({
	password: password,
	passwordConfirmation: confirmPassword,
	otpCode: otpCode
});
