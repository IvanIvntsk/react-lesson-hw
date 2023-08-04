import {useState} from "react";

const useToggle = (defaultValue) => {
    const [value , setValue] = useState(defaultValue)

    const changeValue = () => {
        setValue((prevValue)=>!prevValue)
    }
    return [value, changeValue]
}

export default useToggle