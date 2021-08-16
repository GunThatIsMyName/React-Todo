import React, { Component } from 'react';
import LotteryPre from './lotteryPre';

const lotteryGame=()=>{
    const lotteryNumber =  Array(45).fill().map((v,i)=>i+1)
    const lottery = [];
    while(lotteryNumber.length >0){
        lottery.push(lotteryNumber.splice(Math.floor(Math.random()*lotteryNumber.length),1)[0])
    }
    const bonus = lottery.splice(-1)
    const number = lottery.splice(0,6)
    return [...number,...bonus];
}

class Lottery extends Component {
    state={
        randomNumber : lotteryGame(),
        stateBonus:null,
        stateNumber : null,
        winnerNumber : [],
        redi:false,
    }
    componentDidMount(){
        const {randomNumber}=this.state
        for(let i = 0 ; i < randomNumber.length-1 ; i++){
            setTimeout(() => {
                this.setState(pre=>{
                    return{
                        winnerNumber : [...pre.winnerNumber , randomNumber[i]]
                    }
                })
            }, (i+1)*500);
        }
        setTimeout(() => {
            this.setState(()=>{
                return{
                    stateBonus:randomNumber.splice(-1),
                    redo:true,
                }
            })
        }, 4000);
    }
    render() {
        const {winnerNumber,stateBonus,redo}=this.state
        return (
            <>
                <div>
                당첨숫자:
                {winnerNumber.map(item=><LotteryPre number={item} /> )}
                </div>
                <h1> 보너스 : {stateBonus}</h1>
                {redo && <button>클릭</button>}
            </>
        );
    }
}

export default Lottery;