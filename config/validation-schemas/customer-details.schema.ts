import {
	name,
	email,
	phone
} from '@pd-frontend/config/validation-schemas/common';
import * as yup from 'yup';

export const CustomerDetailsSchema = yup.object().shape({
	collectionFullName: name,
	collectionEmail: email,
	collectionPhone: phone,
	deliveryFullName: name,
	deliveryEmail: email,
	deliveryPhone: phone
});
