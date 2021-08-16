import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Korea from './korea'; 

class Rsp extends PureComponent {
    state={
        score:0,
        imgCoord:0,
        result:'',
        change:'대한민국'
    }
    interval;
    timeout;
    handleClick=(event)=>{
        const {innerText}=event.target;
        
        if(this.timout){
            clearTimeout(this.timout);
        }
        this.timout = setTimeout(() => {
            this.interval=setInterval(() => this.countryChange(), 200);
        }, 1000);
    }
    countryChange = ()=>{
        const {change}=this.state;
        if(change === '대한민국'){
            this.setState(()=>{
                return{
                    change: '호주'
                }
            })
        }else if (change === '호주'){
                this.setState(()=>{
                    return{
                        change: '중국'
                    }
                })
        }else if (change === `중국`){
                this.setState(()=>{
                    return{
                        change: '대한민국'
                    }
                })
        }
    }
    componentDidMount(){
       this.interval = setInterval(() => this.countryChange(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
        return (
            <>
                <Korea country={this.state.change} />
                <div>
                    <button onClick={this.handleClick}>가위</button>
                    <button onClick={this.handleClick}>바위</button>
                    <button onClick={this.handleClick}>보자기</button>
                </div>
            </>
        );
    }
}

export default Rsp;