import React from 'react';
import Heart from './Heart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    let txt = this.props.txt;    
    return (
      <div>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        
        <h1>{this.state.txt} - {this.state.cat}</h1> 
        <Button>I <Heart /> React</Button>
        <Title text="123456"/>
      </div>
      );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  txt: "this is the default txt"
};

const Widget = (props) =>
  <input type="text" onChange={props.update} />

const Button = (props) => <button>{props.children}</button>

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  text(props, propName, component) {
    if(!(propName in props)) {
      return new Error(`missing ${propName}`)
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} was too short`);
    }
  }
};

export default App;