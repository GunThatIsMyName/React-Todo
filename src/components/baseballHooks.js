import { useState } from "react";

const getRandomNumber = ()=>{
    const number = [1,2,3,4,5,6,7,8,9];
    
}

const BaseBallHook = () => {
    const [value,setValue] = useState('')
    const [randomNumber , setRandom] = useState()
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(value,"벨류값")
    }
    const handleInput = (e)=>{
        console.log(e)
        setValue(e.target.value)
    }
  return (
    <>
      <h1>오늘의 숫자는 </h1>
      <h3></h3>
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <input maxLength={4} value={value} onChange={handleInput} />
      </form>
      <div>시도 : </div>
      <ul>
        
        
      </ul>
    </>
  );
};

export default BaseBallHook;