import { useState } from "react";

const getRandomNumber = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const random = [];
  for (let i = 0; i < 4; i++) {
    const newNumber = number.splice(
      Math.floor(Math.random() * (number.length - i)),
      1
    )[0];
    random.push(newNumber);
  }
  return random;
};

const BaseBallHook = () => {
  const [value, setValue] = useState("");
  const [randomNumber, setRandom] = useState(getRandomNumber);
  const [result, setReulst] = useState("");
  const [tried, setTried] = useState([]);
  console.log(randomNumber, "1");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(randomNumber.join(""), "ㅓ정답");
    console.log(value, "벨류값");
    if (value === randomNumber.join("")) {
      //정답일경우
      alert("정답입니다");
      setValue("");
      setRandom(getRandomNumber);
    } else {
      //틀렸을경우 시도 횟수를 본다
      let strike = 0;
      let ball = 0;
      if(tried.length >=9){
        //10번 이상 실행
        alert("실패!");
        setValue("");
        setRandom(getRandomNumber);
        setTried([]);
      }else{
        //10번 이하 실행 스트라이크 볼 체크
        console.log("기회남은ㅁ")
        console.log(value[1],"나의답")
        console.log(randomNumber.join(""),"정답")
        for(let i = 0 ; i < 4 ; i ++){
          if(value[i]===randomNumber.join("")[i]){
            strike ++;
          }else if(randomNumber.join("").includes(value[i])){
            ball ++;
          }
        }
        setReulst(`${strike}스트라이크 ${ball} 볼입니다`);
        setValue("");
        setTried((preTry)=>{
          return[...preTry,{try:value,result:`${strike} 스트라이크 ${ball} 볼 `}]
        })
      }
    }
  };
  const handleInput = (e) => {
    console.log(e);
    setValue(e.target.value);
  };
  return (
    <>
      <h1>오늘의 숫자는 </h1>
      <h3>{randomNumber}</h3>
      <h4>{result}</h4>
      <form onSubmit={handleSubmit}>
        <input maxLength={4} value={value} onChange={handleInput} />
      </form>
      <div>시도 :{tried.length} </div>
      {tried.map(item=><li>{item.try} - {item.result}</li>)}
      <ul></ul>
    </>
  );
};

export default BaseBallHook;
