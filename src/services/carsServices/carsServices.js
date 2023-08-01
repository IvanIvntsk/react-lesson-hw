import {apiCarsServices} from "../apiServices/apiSevices";
import {urls} from "../../urls/urls";

const carsServices = {
    getAll: () => apiCarsServices.get(urls.cars.cars)
}

export {carsServices}