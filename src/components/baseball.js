import React, { Component } from "react";

const getNumber = () => {
  //랜덤숫자 4개 만들기
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomNumber = [];
  for (let i = 0; i < 4; i++) {
    const newNumber = candidate.splice(
      Math.floor(Math.random() * (candidate.length - i)),
      1
    )[0];
    randomNumber.push(newNumber);
  }
  return randomNumber;
};

class Baseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumber(),
    tries: []
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { value, answer } = this.state;
    console.log(value,"나의답")
    console.log(answer.join(""),"정답")
    if(value === answer.join("")){
        // 정답일 경우
        this.setState(()=>{
            return{
                value:'',
                tries:[],
            }
        })
        alert("정답입니다 게임을 재시작하세요");            
        this.setState({
            answer:getNumber(),
        })
    }else{
        //볼 스트라이크 검사
        console.log(this.state.tries.length,"tries 길이")
        if(this.state.tries.length >=9){
            //길이가 9보다 클때
            this.setState(()=>{
                return{
                    result: `10번 넘겨서 실패! 정답은 ${this.state.answer.join('')} 였습니다`
                }
            })
            alert("정답입니다 게임을 재시작하세요")           
                this.setState({
                    answer:getNumber(),
                    value:"",
                    tries:[],
                })
        }else{
            console.log(`길이가 괜찮아요 아직`)
            let strike = 0;
            let ball = 0;
            const answerArray = this.state.value.split('').map((item)=>parseInt(item));
            for(let i = 0 ; i < 4 ; i ++){
                if(answerArray[i] === this.state.answer[i]){
                    strike +=1;
                }else if(this.state.answer.includes(answerArray[i])){
                    ball +=1;
                }
            }
            this.setState({
                tries:[...this.state.tries,{try:this.state.value,result:`${strike} 스트라이크 ${ball} 볼입니다`}],
                value:''
            })
            console.log(strike,ball ,"스트라이크 볼")
        }
    }
    console.log("xxxx")
  };
  handleInput = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  render() {
    const { result, value, answer, tries } = this.state;
    return (
      <>
        <h1>오늘의 숫자는 </h1>
        <h3>{answer}</h3>
        <h1>{result}</h1>
        <form onSubmit={this.handleSubmit}>
          <input maxLength={4} value={value} onChange={this.handleInput} />
        </form>
        <div>시도 : {tries.length}</div>
        <ul>
            {tries.map(item=><li>{item.try} - {item.result}</li>)}
        </ul>
      </>
    );
  }
}

export default Baseball;
