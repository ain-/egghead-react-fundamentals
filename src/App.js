import React from 'react';

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
        <b>Bold</b>
      </div>
      );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}

const Widget = (props) =>
  <input type="text" onChange={props.update} />

export default App;