import * as React from 'react';
/* tslint:disable */


// interface IAppProps {}

interface IAppState {
  num1: number;
  num2: number;
  action: string;
  result: number;
  count: number;
}

class App extends React.Component <{}, IAppState> {
  public state = {num1: 0, num2: 0, result: 0, count: 1, action: ""}

  public render() {
    
    return (
      <div id = "calc">
        <p id="display">
          {this.state.num1} {this.state.action} {this.state.num2}<br/>
          {this.state.result}
        </p>
      
        

        <button onClick={this.numHandler} id="1" >1</button>
        <button onClick={this.numHandler} id="2" >2</button>
        <button onClick={this.numHandler} id="3" >3</button>
        <br/> 
        <button onClick={this.numHandler} id="4" >4</button>
        <button onClick={this.numHandler} id="5" >5</button>
        <button onClick={this.numHandler} id="6" >6</button>
        <br/> 
        <button onClick={this.numHandler} id="7" >7</button>
        <button onClick={this.numHandler} id="8" >8</button>
        <button onClick={this.numHandler} id="9" >9</button>
        <br/> 

        <div id="actButtons">
          <button onClick={this.actHandler} id="+">+</button> 
          <button onClick={this.actHandler} id="-">-</button><br/>
          <button onClick={this.actHandler} id="*">*</button>
          <button onClick={this.actHandler} id="/">/</button><br/>
        </div>

        <button onClick={this.resHandler} id="res">=</button>
        
      </div>
    );  
  }


  public numHandler = (event: any) => {
    if (this.state.count === 1)
    {
      this.setState ({
        num1: parseInt(event.target.id, 0),
        count: 2
      });
    }

    else{
      this.setState ({
        num2: parseInt(event.target.id, 0),
        count: 1,
      });
    } 
  };

  public actHandler = (event: any) => { 
    this.setState( {
      action: event.target.id
    } );
  };

  public resHandler = () => { 
    switch(this.state.action) {
      case "+":
        this.setState( { result: this.state.num1 + this.state.num2 });
        break;

      case "-":
        this.setState( { result: this.state.num1 - this.state.num2 });
        break;

      case "*":
        this.setState( { result: this.state.num1 * this.state.num2 });
        break;

      case "/":
        this.setState( { result: this.state.num1 / this.state.num2 });
        break;
    }
  };
}

export default App;