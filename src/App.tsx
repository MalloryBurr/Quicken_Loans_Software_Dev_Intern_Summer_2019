import * as React from 'react';

import CalcOutput from './calcOutput';
// interface IAppProps {}

interface IAppState {
  num1: number;
  num2: number;
  result: number;
}

class App extends React.Component <{}, IAppState> {
  public state = {num1: 1, num2: 1, result: 1}

  public render() {
    return (
      <div style={{textAlign: 'center'}}>
        <CalcOutput calc={this.state.result} />
        <button onClick={this.oneHandler}>1</button>
        <button onClick={this.addHandler}>add</button>
      </div>
    );  
  }

  public oneHandler = () => {
      return this.setState( { num1: 10 } );
  };

  public addHandler = () => {
      return this.setState( {result: this.state.num1 + this.state.num2} );
  };


}

export default App;