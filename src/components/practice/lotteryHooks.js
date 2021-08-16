import { useState } from "react";

const lotteryGame=()=>{
    const lotteryNumber =  Array(45).fill().map((v,i)=>i+1)
    const lottery = [];
    while(lotteryNumber.length >0){
        lottery.push(lotteryNumber.splice(Math.floor(Math.random()*lotteryNumber.length),1)[0])
    }
    const bonus = lottery.splice(-1)
    const number = lottery.splice(0,6)
    return {bonus,number}
}


const LotteryHooks = () => {
    const [sixNumber,setSix] = useState(lotteryGame.number)
    console.log(sixNumber,"22")
  return (
        <>
            <div>
                
            </div>
           
        </>
  );
};

export default LotteryHooks;