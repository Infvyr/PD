import { CreateUser } from '@pd-backend/types';

export interface RegisterCredentials extends CreateUser {
	terms: boolean;
}
