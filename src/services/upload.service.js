import Axios from "axios";
import { BASE_API_URL } from "./constants";

class UploadService {
  async uploadDoc(cred) {
    const formData = new FormData();
    formData.append("file", cred.file);
    // console.log("from service ", formData.get("file"));
    const params = JSON.stringify({
      Paper: formData,
      id: cred.id,
    });
    try {
      const response = await Axios.post(
        `${BASE_API_URL}/public/uploadTest`,
        params,
        
        {
          headers: {
            "content-type": "application/pdf",
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
