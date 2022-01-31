import Axios from "axios";
import { BASE_API_URL } from "./constants";

class UploadService {
  async uploadDoc(cred) {
    console.log("from service ", cred);
    const params = JSON.stringify({
      Paper: cred.formData,
      id: cred.id,
    });
    try {
      const response = await Axios.post(
        `${BASE_API_URL}/public/uploadTest`,
        params,
        
        {
          headers: {
            "content-type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            'Access-Control-Allow-Credentials':true
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("it is an error");
      throw error;
    }
  }
}

export default UploadService;
