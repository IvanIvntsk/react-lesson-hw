import {apiServices} from "../apiServices/apiServices";
import {urls} from "../../constans/URL/urls/urls";

export const postsServices = {
    getById:id => apiServices.get(urls.posts.byId(id))
}