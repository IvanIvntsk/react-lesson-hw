import apiServices from "../apiServices/apiServices";
import {urls} from "../../constants/urls";

export const carServices = {
    getAll: () => apiServices.get(urls.cars.base),
    delete: (id) =>apiServices.delete(urls.cars.byId(id)),
    create: (data) => apiServices.post(urls.cars.base, data),
    put: (id,data) => apiServices.put(urls.cars.byId(id), data)
}

