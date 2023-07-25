import axios from "axios";
import {baseURL} from "../../constans/URL/urls/urls";

export const apiServices = axios.create({baseURL:baseURL})