import carServices from "../../services/carServices/carServices";

const carsActions = {
    SET: 'SET',
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
}

const carsActionsType = {
    set: (data) => ({type:carsActions.SET, payload: data}),
    create: (data) => ({type:carsActions.CREATE, payload: data}),
    update: (id, data) => ({type:carsActions.UPDATE, payload: id, data}),
    delete: (id) => ({type:carsActions.DELETE, payload: id})
}

const carsThunks = {
    get: () => (dispatch) => {
        carServices.getAll()
            .then(({data})=>dispatch(carsActionsType.set(data)))
    },
    create: (data) => (dispatch) => {
        carServices.create(data)
            .then(({data}) => dispatch(carsActionsType.create(data)))
    },
    put: (id, data) => (dispatch) => {
        return carServices.put(id, data)
            .then(() => dispatch(carsActionsType.update(id, data)))
    },
    delete: (id) => (dispatch) => {
        carServices.delete(id)
            .then(() => dispatch(carsActionsType.delete(id)))
    }
}

export {carsActions , carsActionsType, carsThunks}