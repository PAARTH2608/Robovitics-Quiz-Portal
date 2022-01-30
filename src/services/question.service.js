import Axios from 'axios'
import {BASE_API_URL} from './constants';

class QuestionService {
  async fetchQuestion(cred) {
    try {
      const response = await Axios.get(`${BASE_API_URL}/public/test/${cred.id}`, cred);
      return response.data;
    } 
    catch (error) {
      console.log("it is an error");
      throw error;
    }
  }
}

export default QuestionService;
