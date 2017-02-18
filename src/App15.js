import React from 'react';

const HOC = (InnerComponent) => class extends React.Component {
    render() {
        return (
            <InnerComponent 
                {...this.props}
            />
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Button>button</Button>
                <hr />
                <LabelHOC>label</LabelHOC>
            </div>
        );
    }
}

const Button = HOC((props) => <button>{props.children}</button>)

class Label extends React.Component {
    render() {
        return (
            <label>{this.props.children}</label>
        );
    }
}

const LabelHOC = HOC(Label);

export default App;