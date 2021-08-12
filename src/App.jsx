import React from "react";
import "./App.css";
import Gugu from "./components/Gugu";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      first: Math.ceil(Math.random()*9),
      second: Math.ceil(Math.random()*9),
      value: '',
      result: '',
    }
  }
  handleNumber=(event)=>{
    this.setState({value:event.target.value})
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    const {value,first,second}=this.state
    if(parseInt(value) !== first*second){
      this.setState({
        result:'땡',
        value:'',
      })
    }else{
      this.setState({
        result:"딩동댕",
        first: Math.ceil(Math.random()*9),
        second: Math.ceil(Math.random()*9),
        value:'',
      })
    }
  }
  render(){
    return(
      <React.Fragment>
        <Gugu first={this.state.first} second={this.state.second} onChange={this.handleNumber} onSubmit={this.handleSubmit} result={this.state.result} />
      </React.Fragment>
    )
  }
}

export default App;
