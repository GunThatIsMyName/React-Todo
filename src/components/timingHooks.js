import { useRef, useState } from "react";
import "./timing.css"

function randomTime(){
    return (Math.floor(Math.random()*1000)+Math.floor(Math.random()*5000))
}

const TimingHooks = ()=>{
    const [status,setStatus] = useState("Click to start");
    const [classStatus,setCalss] = useState('waiting')
    const [randomSecs,setRandom] = useState(randomTime)
    const [backColor,setBackColor] = useState('black')
    const timeOut = useRef(null);
    const startTimer = useRef()
    const endTimer = useRef()

    const handleClick = ()=>{
        if(classStatus === `waiting`){
            setCalss('ready');
            setStatus('Ready to Hit')
            setBackColor('orange')
            timeOut.current = setTimeout(() => {
                setCalss("start")
                setStatus('HIT THE BUTTON')
                setBackColor('teal')
                startTimer.current= Date.now()
            }, randomSecs);
        }
        if(classStatus === `ready`){
            if(timeOut){
                clearTimeout(timeOut)
            }
            setCalss("card")
            setStatus('NONONNONONON')
            setBackColor('red')
        }
        if(classStatus === `start`){
            endTimer.current = Date.now()
            console.log(endTimer,"2")
            console.log(startTimer,"1")
        }
    }
    return(
        <>
            {(()=>{
                if(1===1){
                    return <h1>호호호</h1>
                }
            })()}
            <div onClick={handleClick} id="box" style={{backgroundColor:backColor}} className={classStatus}>
                <h3>{status}</h3>
            </div>

        </>
    )
}
export default TimingHooks;
