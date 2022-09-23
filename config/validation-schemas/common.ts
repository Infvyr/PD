import * as yup from 'yup';

export const email = yup
	.string()
	.required('Email is required')
	.email('Must be a valid email');

export const password = yup
	.string()
	.required('Password is required')
	.min(8, 'Password should be at least 8 characters')
	.matches(
		/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
		'Must contain uppercase, lowercase, numbers and symbols'
	);

export const confirmPassword = yup
	.string()
	.required('Confirm password is required')
	.min(8, 'Password should be at least 8 characters')
	.oneOf([yup.ref('password'), null], 'Passwords must match');

export const name = yup
	.string()
	.required('Name is required')
	.min(2, 'Name should be at least 2 characters');

export const otpCode = yup
	.string()
	.required('The code is required')
	.min(7, 'The code must be 7 characters');

export const phone = yup
	.string()
	.required('Phone is required')
	.test('len', 'Invalid phone format', (val) => {
		const val_length = val?.replace(/[-|_]/g, '').length;
		return val?.substring(0, 2) === '44' ? val_length === 12 : !!val_length;
	})
	.required('Phone is required');
