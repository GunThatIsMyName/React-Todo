import React, { PureComponent } from 'react';

class Korea extends PureComponent {
    render() {
        return (
            <h1>
                {this.props.country}
            </h1>
        );
    }
}

export default Korea;