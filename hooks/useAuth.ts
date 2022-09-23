import { CreateUser } from '@pd-backend/types';
import { AuthApi } from '@pd-frontend/api/auth';
import { LoginCredentials } from '@pd-frontend/interfaces/Login.interface';
import { showErrorToast } from '@pd-frontend/utils/show-toast';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const useAuth = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isLoadingProfile, setIsLoadingProfile] = useState<boolean>(false);
	const [userProfile, setUserProfile] = useState([]);

	const onSignIn = async (loginCredentials: LoginCredentials) => {
		try {
			const authApi = new AuthApi();
			const response = await authApi.signIn(loginCredentials);
			if (response.status === 204) {
				router.push('/client/account');
			}
		} catch (err) {
			showErrorToast(err, 'onSignIn:auth/signin');
		}
	};

	const onSignOut = async () => {
		try {
			setIsLoading(true);
			const authApi = new AuthApi();
			const response = await authApi.logOut();
			if (response.status === 204) {
				router.replace('/');
			}
		} catch (error) {
			showErrorToast(error, 'onSignOut');
		} finally {
			setIsLoading(false);
		}
	};

	const onSignUp = async (credentials: CreateUser) => {
		const registerCredentials = {
			...credentials,
			name: credentials.name.trim()
		};
		try {
			setIsLoading(true);
			const authApi = new AuthApi();
			const response = await authApi.signUp(registerCredentials);
			if (response.status === 201) {
				router.replace('/auth/signin');
			}
		} catch (error) {
			showErrorToast(error, 'onSignUp');
		} finally {
			setIsLoading(false);
		}
	};

	const getUserProfile = async () => {
		try {
			setIsLoadingProfile(true);
			const authApi = new AuthApi();
			const response = await authApi.profile();
			response.data && setUserProfile(response.data);
		} catch (error) {
			showErrorToast(error, 'getUserProfile');
		} finally {
			setIsLoadingProfile(false);
		}
	};

	return {
		onSignIn,
		onSignOut,
		onSignUp,
		getUserProfile,
		isLoading,
		isLoadingProfile,
		userProfile
	};
};
