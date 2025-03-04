import axios from 'axios';

const MAIN_URL = 'http://localhost:3000/api';

export const getUsers = () => {
	const url = `${MAIN_URL}/users`;
	return axios.get(url);
};