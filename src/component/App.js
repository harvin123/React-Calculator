import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import operations from '../logic/operations';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      current: null,
      FirstVal:'',
      Result:null,
      nextval:null,
      operation: '',
    };
  }
  handleClick = buttonName => {
    this.setState((prev,props)=>(calculate(prev, buttonName)));
  //  this.setState((prev,props)=>{ nextval: prev.next});
    this.setState((prev,props)=>(operations(prev,buttonName)));
    //console.log(this.state);
  };

  componentDidMount()
  {
    //console.log(this.state);
  }
  componentWillUpdate(prevProps,prevState)
  {
   // console.log(prevState);
  }
  render() {
   console.log(this.state);
    return (
      <div className="component-app">
        <Display FirstVal={this.state.FirstVal}  op={this.state.operation} next={this.state.nextval} />
        <Display Result={this.state.Result || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
