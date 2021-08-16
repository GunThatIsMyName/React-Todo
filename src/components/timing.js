import React, { Component } from 'react';
import Speed from './speed';
import "./timing.css"

let hitBtn = null;
let startTime = null;
let endTime = null;

class Timing extends Component {
    state={
        status:"wating",
        classname:'waiting',
        result:[],
        backColor:'black',
        speed:0,
    }
    randomSeconds = ()=>{
        return (Math.floor(Math.random()*1000)+Math.floor(Math.random()*5000))
    }
    changeSetstate=(classname,message,color)=>{
        this.setState(()=>{
            return{
                classname: classname,
                status:message,
                backColor:color,
            }
        })
    }
    handleGameStart=()=>{
        console.log(this.state.result,"결과 모음")
        const {classname}=this.state;
        if(classname === 'waiting'){
            this.changeSetstate('ready',`ready to hit`,'teal')
            hitBtn = setTimeout(() => {
                this.changeSetstate('start','Hit The BUTTON','brown');
                console.log(Date.now(),"시작시간")
                startTime = Date.now()
            }, this.randomSeconds());
        }
        if(classname === 'ready'){
            if(hitBtn){
                clearTimeout(hitBtn)
            }
            this.changeSetstate(`card`,`NONONOONOON`,'red')
        }
        if(classname === 'start'){
            endTime = Date.now()
            console.log(Date.now(),"도착시간")
            console.log(endTime - startTime)
            const speed = (endTime - startTime);
            this.setState(pre=>{
                return{
                    speed:speed,
                    result:[...pre.result,speed]
                }
            })
            this.changeSetstate(`touch`,`HIT!`,"green")
        }
        //재시작
        if(classname === 'touch'){
            console.log("Touch")
            endTime=null;
            startTime=null;
            this.setState(()=>{
                return{
                    speed:0
                }
            })
            this.changeSetstate('waiting',`restart`,"black")
        }
        if(classname === 'card'){
            console.log("Card")
            endTime=null;
            startTime=null;
            this.changeSetstate('waiting',`restart`,"black")
        }
    }
    render() {
        return (
            <>
                <div id="box" onClick={this.handleGameStart} style={{backgroundColor:this.state.backColor}} className={this.state.classname}>
                    <h1>{this.state.status}</h1>
                    {this.state.speed?`${this.state.speed} /ms`:null}
                </div>  
                    {this.state.result && this.state.result.map(item=><Speed key={Date.now()} speedCheck={item} />)}
                    <hr />
                    <h1>평균값</h1>
                    {this.state.result && 
                    this.state.result.length >=1 && 
                    this.state.result.reduce((a,c) => a+c)/this.state.result.length}
                {}
            </>
        );
    }
}

export default Timing;