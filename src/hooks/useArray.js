import {useState} from "react";

const useArray = (defaultValue) => {
    const [array, setArray] = useState(defaultValue)

    const addItem = (item) => {
        setArray(prev => [...prev, item])
    }

    const removeItem = (id) => {
        const update = array.filter((item,index) => index!==id)
        setArray(update)
        }

    return {addItem, removeItem, array}
    }

export default useArray