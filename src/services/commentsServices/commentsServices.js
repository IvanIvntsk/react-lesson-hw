import {apiServices} from "../apiServices/apiServices";
import {urls} from "../../constans/URL/urls/urls";

export const commentsServices = {
    getAll:()=>apiServices.get(urls.comment.base)
}