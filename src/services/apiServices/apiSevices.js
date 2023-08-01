import axios from "axios";
import {baseURLCars, baseURLPlaceholder} from "../../urls/urls";

const apiPlaceholderServices = axios.create({baseURL:baseURLPlaceholder})
const apiCarsServices = axios.create({baseURL:baseURLCars})

export {apiPlaceholderServices, apiCarsServices}