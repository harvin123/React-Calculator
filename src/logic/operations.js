
import isNumber from './isNumber';

export default function operations(obj,buttonName)
{
    if(buttonName==="="||buttonName==="AC" ||buttonName==="+/-")
    {
        return {
            FirstVal:obj.FirstVal, 
            Result:obj.total,
        };
    } 
   /* else if(buttonName === "C")
    {
      return {   
          store:obj.store.slice(0,obj.store.length-1),
          total:'',
          next:''
        };
    }*/
    else if(obj.current && obj.total)
    {
        return{ nextval: obj.current};
    }
    else if(!obj.total)
    {
        return { FirstVal:obj.current};
    }
    else if(isNumber(buttonName) && !obj.nextval){
       return{
           FirstVal:obj.FirstVal + buttonName 
        };
    }

}