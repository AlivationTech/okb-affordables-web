import axios from "axios";

const baseURL = "http://app-624e0356-5f6c-4b1f-b1e7-8c7d43a6c61a.cleverapps.io/api/v1"

export async function GET(endpoint) {
    const url = baseURL + endpoint;
    const headers = {
        headers :{
          'Content-Type': 'application/json'
   
        }
      }

    try {
        return await axios.get(url, headers)
    }
    catch (error) {
   
            return error.response;
        
    }

}