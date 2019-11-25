import React, { Component } from "react";
import Fullscreen from "react-full-screen";

class App extends Component {

    state = {
      isFull: false
  };

  componentDidMount(){
    setTimeout(()=>this.goFull(), 500)
  }

  goFull = () => {
    this.setState({ isFull: true });
  };

  render() {
    console.log('isFull', this.state.isFull);
    return (
      <div className="App">

        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}
        >
        <div className="full-screenable-node">
        </div>
      </Fullscreen>
      </div>
    );
  }
}

export default App;