import axios from "axios";

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Experience Service
 * @Summary This class is a service that makes HTTP calls to the backend service to retrieve information about experiences using axios
 */
class ExperienceService {

    /**
     * Method to get all experiences of a given type
     * @param {String} type 
     */
    async getExperiencesByType(type) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.get("http://localhost:8102/experiences/all/" + type, axiosConfig);
        return response;
    }


    /**
     * Method to get an experience given the ID
     * @param {String} id 
     */
    async getExperiencesById(id) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.get("http://localhost:8102/experiences/" + id, axiosConfig);
        return response;
    }

}

export default new ExperienceService();