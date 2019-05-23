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
        <button onClick={this.oneHandler} id="1" >1</button>
        <button onClick={this.oneHandler} id="2" >2</button>
        <button onClick={this.oneHandler} id="3" >3</button>
        <br /> <br/>
        <button onClick={this.addHandler}>add</button>
        
      </div>
    );  
  }

  public oneHandler = (event: any) => {
      // /* tslint:disable */
      // console.log(event.target.id);
      return this.setState( { num1: parseInt(event.target.id, 0) } );
  };

  public addHandler = () => {
      return this.setState( {result: this.state.num1 + this.state.num2} );
  };

  // public deleteRow = (id, e) => {
  //   return this.setState { id: 1}
  // }


}

export default App;