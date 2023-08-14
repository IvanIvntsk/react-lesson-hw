import {carServices} from "../../services/carServices/carServices";

const carsActionsType = {
    SET: 'SET',
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
}

const carsActions = {
    set: (data) => ({type:carsActionsType.SET, payload: data}),
    create: (data) => ({type:carsActionsType.CREATE, payload: data}),
    update: (id, data) => ({type:carsActionsType.UPDATE, payload: id, data}),
    delete: (id) => ({type:carsActionsType.DELETE, payload: id})
}

const carsThunks = {
    get: () => (dispatch) => {
        carServices.getAll()
            .then(({data})=>dispatch(carsActions.set(data)))
    },
    create: (car) => (dispatch) => {
        carServices.create(car)
            .then(({data}) => dispatch(carsActions.create(data)))
    },
    update: (id, car) => (dispatch) => {
        return carServices.put(id, car)
            .then(() => dispatch(carsActions.update(id, car)))
    },
    delete: (id) => (dispatch) => {
        carServices.delete(id)
            .then(() => dispatch(carsActions.delete(id)))
    }
}

export {carsActions , carsActionsType, carsThunks}