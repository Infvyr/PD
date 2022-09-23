import { KEYS } from '@pd-frontend/config/keys';
import axios from 'axios';

const apiClient = axios.create({
	withCredentials: true,
	baseURL: KEYS.BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
});

/*const apiPrivate = axios.create({
	withCredentials: true,
	baseURL: KEYS.BASE_URL,
	headers: {
		'Content-Type': 'application/json'
		// Authorization: `Bearer ${token}`
	}
});*/

export default apiClient;
