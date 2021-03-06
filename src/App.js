import React from 'react';
import Heart from './Heart';
import Input from './Input';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0,
      currentEvent: '---',
      a: '',
      b: '',
      val: 0
    }
    this.update2 = this.update2.bind(this);
    this.update4 = this.update4.bind(this);
  }
  update(e) {
    this.setState({txt: e.target.value});
  }
  update2(e) {
    this.setState({currentEvent: e.type});
  }
  update3() {
    this.setState({a: this.a.refs.input.value,
      b: this.refs.b.value});
  }
  update4() {
    this.setState({val: this.state.val + 1});
  }

  componentWillMount() {
    console.log('componentWillMount');
    this.setState({m: 2});
  }
  componentDidMount() {
    console.log('componentDidMount');
    console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update4, 500);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.inc);
  }

  render() {
    let txt = this.props.txt;  
    console.log('render');  
    return (
      <div>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        
        <h1>{txt} + {this.state.txt} - {this.state.cat}</h1> 
        <Button>I <Heart /> React</Button>
        <Title text="123456"/>
        <textarea 
          onKeyPress={this.update2}
          onCopy={this.update2}
          onPaste={this.update2}
          onCut={this.update2}
          onFocus={this.update2}
          onBlur={this.update2}
          onTouchStart={this.update2}   
          onTouchMove={this.update2}          
          onTouchEnd={this.update2}          
                 

          cols="30" rows="10"/>
        <h1>{this.state.currentEvent}</h1>
        <Input 
          ref={ component => this.a = component }
          update={this.update3.bind(this)}
        /> {this.state.a}
        <br />
        <input 
          ref="b"
          type="text"
          onChange={this.update3.bind(this)}
        /> {this.state.b}
        <button onClick={this.update4}>{this.state.val * this.state.m}</button>
      </div>
      );
  }
}

App.propTypes = {
  txt: React.PropTypes.string
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