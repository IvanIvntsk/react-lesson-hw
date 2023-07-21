export const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'

const comment = '/comments'

export const Url = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`

    },
    comment:{
        base:comment,
        byId:(id) => `${comment}/${id}`
    }
}
