import { useEffect, useRef, useState } from "react";
import Korea from "../korea";

const RspHooks = () => {
    const [change,setChange] = useState('대한민국')
    const interval = useRef();
    const handleClick=(event)=>{
        console.log(event.target.innerText)
        clearInterval(interval)
    }
    useEffect(()=>{
        interval.current= setInterval(() => {
            changeCountry()
        }, 1000);
    },[change])
    const changeCountry = ()=>{
        if(change==="대한민국"){
            setChange("호주")
        }else if (change ==="호주"){
            setChange("중국")
        }else{
            setChange("대한민국")
        }
    } 

    return (
        <>
            <Korea country={change} />
            <div>
                <button onClick={handleClick}>가위</button>
                <button onClick={handleClick}>바위</button>
                <button onClick={handleClick}>보자기</button>
            </div>
        </>
    );
};


export default RspHooks;