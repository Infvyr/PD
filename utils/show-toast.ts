import { KEYS } from '@pd-frontend/config/keys';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

type ServerError = { message: string; statusCode: number };

export const showErrorToast = (err: unknown, debugFuncName: string) => {
	if (axios.isAxiosError(err)) {
		!KEYS.IS_PROD_ENV && console.error(debugFuncName, err);

		const serverError = err as AxiosError<ServerError>;

		switch (err?.response?.status) {
			case 400:
			case 401:
			case 404:
			case 409:
				if (serverError && serverError.response) {
					toast.error(serverError.response.data.message);
				} else {
					toast.error(err.message);
				}
				break;

			case 500:
				toast.error(
					'Oops, something went wrong. Try to refresh the page or feel free to contact us if the problem persist.',
					{ duration: 5000 }
				);
				break;
			default:
				toast.error(
					"We apologize, we have currently an issue. We're already fixing it.",
					{ duration: 5000 }
				);
		}
	} else {
		toast.error(err as any);
	}
};

export const showSuccessToast = (message: string) => toast.success(message);
