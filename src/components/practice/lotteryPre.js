import React, { Component } from 'react';

class LotteryPre extends Component {
    render() {
        const {number}=this.props;
        return (
            <h3>
                {number}
            </h3>
        );
    }
}

export default LotteryPre;