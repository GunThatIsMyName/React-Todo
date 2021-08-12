import React, { Component } from 'react';

class WordGame extends Component {
    state={
        first:'이준현',
        value:'',
        result:''
    }
    handleWord = (e)=>{
        this.setState({value:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {first,value}=this.state
        if(value.length <= 1){
            return;
        }
        if(first.slice(-1)===value.slice(0,1)){
            this.setState({
                first:value,
                value:'',
                result:"딩동댕"
            })
        }else{
            this.setState({
                result:"땡",
                value:'',
            })
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.first}</h1>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" value={this.state.value} onChange={this.handleWord} />
                    <button type="submit">PRESS</button>
                </form>
                <h4>{this.state.result}</h4>
            </div>
        );
    }
}

export default WordGame;