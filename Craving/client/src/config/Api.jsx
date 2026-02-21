import axios from "axios";

const axiosinstance = axios.create({
    baseURL : "http://localhost:4500",
    withCredentials :true,

})
export default axiosinstance