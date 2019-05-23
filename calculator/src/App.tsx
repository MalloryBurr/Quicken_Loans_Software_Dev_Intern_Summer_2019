import * as React from 'react';
/* tslint:disable */


// interface IAppProps {}

interface IAppState {
  num1: number;
  num2: number;
  result: number;
  count: number;
}

class App extends React.Component <{}, IAppState> {
  public state = {num1: 0, num2: 0, result: 0, count: 1}

  public render() {
    
    return (
      <div style={{textAlign: 'center'}}>
        <p>
        {this.state.num1}   &nbsp;  {this.state.num2} <br/>
        result:     {this.state.result}<br/><br/>
        </p>
        

        <button onClick={this.numHandler} id="1" >1</button>
        <button onClick={this.numHandler} id="2" >2</button>
        <button onClick={this.numHandler} id="3" >3</button>
        <br /> <br/>
        <button onClick={this.numHandler} id="4" >4</button>
        <button onClick={this.numHandler} id="5" >5</button>
        <button onClick={this.numHandler} id="6" >6</button>
        <br /> <br/>
        <button onClick={this.numHandler} id="7" >7</button>
        <button onClick={this.numHandler} id="8" >8</button>
        <button onClick={this.numHandler} id="9" >9</button>
        <br /> <br/>
        <button onClick={this.addHandler}>+</button>
        <button onClick={this.subHandler}>-</button>
        <button onClick={this.mulHandler}>*</button>
        <button onClick={this.divHandler}>/</button>
        
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
        count: 1
      });
    }

        
  };

  public addHandler = () => { 
    this.setState( {
      result: this.state.num1 + this.state.num2,
    } );
  };

  public subHandler = () => { 
    this.setState( {
      result: this.state.num1 - this.state.num2,
    } );
  };

  public mulHandler = () => { 
    this.setState( {
      result: this.state.num1 * this.state.num2,
    } );
  };

  public divHandler = () => { 
    this.setState( {
      result: this.state.num1 / this.state.num2,
    } );
  };
}

export default App;