import React from 'react';

class Input extends React.Component {
    render() {
        return <input type="text" onChange={this.props.update}/>
    }
}

export default Input;