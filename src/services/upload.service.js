import Axios from "axios";
import { BASE_API_URL } from "./constants";

class UploadService {
  async uploadDoc(cred) {
    const formData = new FormData();
    formData.append("Paper", cred.File);
    formData.append("id", cred.id);
    console.log("from service ", formData.get("Paper"));
    try {
      const response = await Axios.post(
        `${BASE_API_URL}/public/uploadTest`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
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
