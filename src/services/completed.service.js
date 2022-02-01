import Axios from 'axios'
import {BASE_API_URL} from './constants';

class CompletedService {
  async completed(cred) {
    try {
      const response = await Axios.post(`${BASE_API_URL}/public/completeTest`, cred);
      return response.status;
    } 
    catch (error) {
      console.log("it is an error");
      throw error.status;
    }
  }
}

export default CompletedService;
