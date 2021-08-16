import React, { PureComponent } from 'react';

class Click extends PureComponent {
    state={
        counter :0
    }
    clickHandle = ()=>{
        this.setState({})
    }

    
    render() {
        return (
            <>
            <div>
                <button onClick={this.clickHandle} >클릭</button>
            </div>
            <h1>holy</h1>
            </>
        );
    }
}

export default Click;