import {apiServices} from "../apiServices/apiServices";
import {urls} from "../../constans/URL/urls/urls";

export const albumsServices = {
    getAll:()=>apiServices.get(urls.albums.base)
}