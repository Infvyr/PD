import { AuthApi } from '@pd-frontend/api/auth';
import { showErrorToast } from '@pd-frontend/utils/show-toast';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

let retry = true;

export const useRefreshToken = () => {
	const router = useRouter();

	useEffect(() => {
		(async () => {
			// only run on private pages
			// if 401 redirect to login page
			// run refresh only 1 time
			try {
				const authApi = new AuthApi();
				setInterval(async () => {
					await authApi.refresh();
				}, 600000); // 19min
			} catch (error) {
				// showErrorToast(error, 'useRefreshToken');
				// if (axios.isAxiosError(error)) {
				// 	if (error.request.status === 401) router.replace('/signin');
				// }
				router.replace('/signin');
			}
		})();
	}, [router]);
};
