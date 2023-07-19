import {apiServices} from "./apiServices/apiServices";
import {URL as Urls} from "../URL/Urls";


export const carServices = {

    getAll:()=>apiServices.get(Urls.cars.base),
    create:(car)=>apiServices.post(Urls.cars.base, car),
    updateById:(id, car) => apiServices.put(Urls.cars.byId(id), car),
    deleteById:(id)=>apiServices.delete(Urls.cars.byId(id))

}