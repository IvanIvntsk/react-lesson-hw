import {apiPlaceholderServices} from "../apiServices/apiSevices";
import {urls} from "../../urls/urls";

const placeholderServices = {
    getPosts: () => apiPlaceholderServices.get(urls.placeholder.posts),
    getComments: () => apiPlaceholderServices.get(urls.placeholder.comments)
}

export default placeholderServices