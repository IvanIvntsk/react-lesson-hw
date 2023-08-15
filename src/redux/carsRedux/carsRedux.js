import {carsActionsType} from "../actions/CarsActions";

const initialState = {
    cars: [],
    update: null,
    carUpdate: {}
}
const carsRedux = (state = initialState, action) => {
    switch (action.type) {
        case  carsActionsType.SET:
            return{
                ...state,
                cars: action.payload
            }
                case  carsActionsType.CREATE:
                    return{
                        ...state,
                        cars: [...state.cars, action.payload]
                    }
                        case  carsActionsType.UPDATE:
                            return{
                                ...state,
                              carUpdate: action.payload
                            }
                             case carsActionsType.DELETE:
                                return {
                                ...state,
                                    cars: state.cars.filter(car => car.id !== action.payload)
                                }
        default:
            return state
    }
}

export default carsRedux