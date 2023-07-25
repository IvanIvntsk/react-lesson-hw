import {apiServices} from "../apiServices/apiServices";
import {urls} from "../../constans/URL/urls/urls";

export const todoServices = {
    getAll:()=>apiServices.get(urls.todos.base)
}