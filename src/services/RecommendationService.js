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

        const response = await axios.get("http://localhost:8102/recommendations/all", axiosConfig);
        return response;
    }

}

export default new RecommendationService();