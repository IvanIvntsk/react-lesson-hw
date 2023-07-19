import axios from "axios";
import {baseURL} from "../../URL/Urls";

export const apiServices =  axios.create({baseURL:baseURL})