import { otpCode } from '@pd-frontend/config/validation-schemas/common';
import * as yup from 'yup';

export const ClientPhoneSettingsSchema = yup.object().shape({
	otpCode: otpCode
});
