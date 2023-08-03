import React, {useMemo} from 'react';

const TestUseMemo = ({data, setData}) => {

    // const [data, setData] = useState(0)
    console.log(data)
    const  calculation = (data) => {
        for (let i = 0; i < 99999; i++) {
            data ++;
        }
        return data;
    }

    const calculationMemo = useMemo(()=> {
        return calculation(data)},[data])

    const changeData = () => {
        setData(data -1)
    }

    return (
        <div>
            {calculationMemo}
            <button onClick={changeData}>Change</button>
        </div>
    );
};

export default TestUseMemo;