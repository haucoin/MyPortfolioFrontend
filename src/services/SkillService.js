import axios from "axios";

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Skill Service
 * @Summary This class is a service that makes HTTP calls to the backend service to retrieve information about skills using axios
 */
class SkillService {

    /**
     * Method to get all skills of a given type
     * @param {String} type 
     */
    async getSkillsByType(type) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.get("http://ec2-13-56-210-118.us-west-1.compute.amazonaws.com/skills/all/" + type, axiosConfig);
        return response;
    }

}

export default new SkillService();