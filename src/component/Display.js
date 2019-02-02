import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

class Display extends React.Component {
  render() {
    if(this.props.next){
      return (
        <div className="component-display">
          <div>{this.props.FirstVal} {this.props.op} {this.props.next}</div>
        </div>
      );
    }
    if(this.props.op){
      return (
        <div className="component-display">
          <div>{this.props.FirstVal} {this.props.op}</div>
        </div>
      );
    }
    if(this.props.FirstVal){
      return (
        <div className="component-display">
          <div>{this.props.FirstVal}</div>
        </div>
      );
    }
    if(this.props.Result)
    {
      return(
        <div className="component-display">
        <div>{this.props.Result}</div>
      </div>
      );
    }
else
return(<div></div>);
}}
Display.propTypes = {
  value: PropTypes.string,
};
export default Display;
