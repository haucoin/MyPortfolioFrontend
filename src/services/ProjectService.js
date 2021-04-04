import axios from "axios";

/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Project Service
 * @Summary This class is a service that makes HTTP calls to the backend service to retrieve information about projects using axios
 */
class ProjectService {

    /**
     * Method to get all projects
     */
    async getProjects() {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        const response = await axios.get("http://ec2-13-56-210-118.us-west-1.compute.amazonaws.com/projects/all", axiosConfig);
        return response;
    }


    /**
     * Method to get a project given the ID
     * @param {String} id 
     */
    async getProjectById(id) {

        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

         const response = await axios.get("http://ec2-13-56-210-118.us-west-1.compute.amazonaws.com/projects/" + id, axiosConfig);
        return response;
    }

}

export default new ProjectService();