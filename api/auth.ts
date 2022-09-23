import { CreateUser } from '@pd-backend/types';
import { LoginCredentials } from '@pd-frontend/interfaces/Login.interface';
import apiClient from '@pd-frontend/config/axios/configuration';

export class AuthApi {
	signIn = (credentials: LoginCredentials) =>
		apiClient.post<LoginCredentials>('/api/auth/login', credentials);

	logOut = () => apiClient.post('/api/auth/logout');

	signUp = (credentials: CreateUser) =>
		apiClient.post('/api/auth/register', credentials);

	refresh = () => apiClient.post('/api/auth/refresh');

	profile = () => apiClient.get('/api/auth/profile');
}
