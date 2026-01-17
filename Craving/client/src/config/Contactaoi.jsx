import axios from "axios";
const contactapi = axios.create({
    baseURL : "http://localhost:4500"
})
export default contactapi

