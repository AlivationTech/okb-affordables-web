import axios from "axios";

const baseURL = "https://okb-affordables.herokuapp.com/api/v1"

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