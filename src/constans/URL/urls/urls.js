export const baseURL = 'https://jsonplaceholder.typicode.com'

const todos = '/todos'
const albums = '/albums'
const comment = '/comments'
const posts = '/posts'

export const urls = {
    todos:{
        base:todos,
    },
    albums:{
        base:albums,
    },
    comment:{
        base:comment,
    },
    posts:{
      byId:(id)=>`${posts}/${id}`
    }
}