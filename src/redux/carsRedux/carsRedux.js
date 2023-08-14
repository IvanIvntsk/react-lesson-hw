import {carsActions} from "../actions/CarsActions";

const initialState = {
    cars: [],
    update: null
}
const carsRedux = (state = initialState, action) => {
    switch (action.type) {
        case  carsActions.SET:
            return{
                ...state,
                cars: action.payload
            }
                case  carsActions.CREATE:
                    return{
                        ...state,
                        cars: [...state.cars, action.payload]
                    }
                        case  carsActions.UPDATE:
                            return{
                                ...state,
                              update: action.payload.update
                            }
                                    return{
                                        ...state,
                                        cars: state.cars.filter(car => car.id !== action.payload)
                                    }
    }
}