import React from 'react';

class Input extends React.Component {
    render() {
        return <div><input ref="input" type="text" onChange={this.props.update}/></div>
    }
}

export default Input;