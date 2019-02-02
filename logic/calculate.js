
import operate from "./operate";
import isNumber from "./isNumber";

/**
 * Given a button name and a calculator data prevect, return an updated
 * calculator data prevect.
 *
 * Calculator data prevect contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
   //console.log(obj);
  
  if (buttonName === "AC") {
    return {
      total: null,
      current: null,
      operation: '',
        Result:null,
      nextval:'',
      FirstVal:''
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.current === "0") {
      return {};
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.current) {
        return { current : obj.current + buttonName };
      }
    else{
      return { current: buttonName,
      };
    }
  } 
    // If there is no operation, update next and clear the value
    if (obj.current) {
      return {
        current: obj.current + buttonName,
        total: null,
      };
    }
    return {
      current: buttonName,
    };
  }

  if (buttonName === ".") {

    if(obj.nextval)
    {
      if(obj.nextval.includes("."))
      {
        return { };
      }
      else
      { return {current:obj.current + '.'};}
    }
    else if(!obj.current)
    {
        return {current:"0."};
    }
   else if (obj.FirstVal) {
      // ignore a . if the next number already has one
    if (obj.FirstVal.includes(".") )
    {return {}; }

   return {current:obj.current + '.'};}
    //  return { current:obj.current + '.' };
    return { current: "0." };
  }

  if (buttonName === "=") {

    if (obj.current && obj.operation) {
      return {
        total: operate(obj.total, obj.current, obj.operation),
        current: obj.current,
        operation: obj.operation,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  if (buttonName === "+/-") {
    if (obj.FirstVal) {
      return {   FirstVal: (-1 * parseFloat(obj.FirstVal)).toString() ,
        current:obj.FirstVal
      };
    }
    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  if (!obj.current && !obj.total) {
    return {};
   }
if(obj.total && obj.operation)
{
  return{
operation :buttonName,
nextval: obj.current
  };
}
 
  if (obj.operation && !obj.current)
  {
    return {};
  }
  if (obj.operation && obj.current)
  {
    return {
      total: operate(obj.total, obj.current, obj.operation),
      current: null,
      operation: buttonName,
    };
  }
  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.current) {
    return { operation: buttonName };
  }
  // save the operation and shift 'next' into 'total'

  return {
    total: obj.FirstVal,
    current: null,
    operation: buttonName,
  };
}