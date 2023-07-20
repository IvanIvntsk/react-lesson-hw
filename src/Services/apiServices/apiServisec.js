import axios from "axios";
import {baseURL} from "../../url/Url";

const apiServices = axios.create({baseURL:baseURL})

export {
    apiServices
}