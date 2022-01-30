import Axios from 'axios'
import {BASE_API_URL} from './constants';

class AuthService {
  async login(cred) {
    // console.log(cred)
    try {
      const response = await Axios.post(`${BASE_API_URL}/admin/login`, cred);
    //   console.log("hehehehe");
      return response.data;
    } 
    catch (error) {
      console.log("it is an error");
      throw error;
    }
  }

  async getBookings(token) {
		// console.log('my name is', token);
		try {
			const response = await Axios.post(
				`${BASE_API_URL}/admin/getBookings`,
				token
			);
			// console.log('hehoheho', response.data);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

  async getReports(token) {
		try {
			const response = await Axios.post(
				`${BASE_API_URL}/admin/getReports`,
				token
			);
			// console.log('reports results', response.data);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async reInstate(credentials) {
		try {
			const response = await Axios.post(
				`${BASE_API_URL}/admin/reinstate`,
				credentials
			);
			// console.log('message are here ', response.data);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async suspend(credentials) {
		try {
			const response = await Axios.post(
				`${BASE_API_URL}/admin/suspend`,
				credentials
			);
			// console.log('message are here ', response.data);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
  
}

export default AuthService;
