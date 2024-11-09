import axios from "axios";

export const fetchTotalUsers = async () => {
    const response = await axios.get("/api/users/total");
    return response.data.data.results;
};