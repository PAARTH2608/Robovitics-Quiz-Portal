import Axios from 'axios'
import {BASE_API_URL} from './constants';

class AuthService {
  async login(cred) {
    try {
      const response = await Axios.post(`${BASE_API_URL}/public/verify`, cred);
      return response.data;
    } 
    catch (error) {
      console.log("it is an error");
      throw error;
    }
  }
}

export default AuthService;
