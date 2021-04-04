import axios from "axios";

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Recommendation Service
 * @Summary This class is a service that makes HTTP calls to the backend service to retrieve information about recommendations using axios
 */
class RecommendationService {

    /**
     * Method to get all recommendations
     */
    async getRecommendations() {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.get("http://ec2-13-56-210-118.us-west-1.compute.amazonaws.com/recommendations/all", axiosConfig);
        return response;
    }

}

export default new RecommendationService();