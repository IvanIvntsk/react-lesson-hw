import apiServices from "../apiServices/apiServices";
import {urls} from "../../constants/urls";
import {json} from "react-router-dom";

const carServices = {
    getAll: () => apiServices.get(urls.cars.base),
    delete: (id) =>apiServices.delete(urls.cars.byId(id)),
    post: (car) => apiServices.post(urls.cars.base, JSON.stringify(car)),
    put: (id,car) => apiServices.put(urls.cars.byId(id), JSON.stringify(car))
}

export default carServices