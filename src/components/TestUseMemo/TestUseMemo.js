import React, {useMemo} from 'react';

const TestUseMemo = ({data, setData}) => {

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
        <div style={{display: "flex", justifyContent: "center", fontSize: "100px"}}>
            {calculationMemo}
            <button style={{
                width:"150px",
                borderRadius: "50px",
                backgroundColor:"black",
                color: "white",
                fontSize: "30px"
            }} onClick={changeData}>Change</button>
        </div>
    );
};

export default TestUseMemo;