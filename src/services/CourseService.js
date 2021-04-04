import axios from "axios";

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Course Service
 * @Summary This class is a service that makes HTTP calls to the backend service to retrieve information about courses using axios
 */
class CourseService {

    /**
     * Method to get all courses
     */
    async getCourses() {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.get("http://ec2-13-56-210-118.us-west-1.compute.amazonaws.com/courses/all", axiosConfig);
        return response;
    }

}

export default new CourseService();