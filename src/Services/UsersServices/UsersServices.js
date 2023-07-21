import {apiServices} from "../apiServices/apiServisec";
import {Url} from "../../url/Url";


export const usersServices = {
    getAll:()=>apiServices.get(Url.users.base),
    create:(user)=>apiServices.post(Url.users.base, user),
    updateById:(id, user)=>apiServices.put(Url.users.byId(id), user),
    deleteById:(id)=>apiServices.delete(Url.users.byId(id))
}

export const commentServices = {
    getAll:()=>apiServices.get(Url.comment.base),
    create:(user)=>apiServices.post(Url.comment.base, user),
    updateById:(id, user)=>apiServices.put(Url.comment.byId(id), user),
    deleteById:(id)=>apiServices.delete(Url.comment.byId(id))
}