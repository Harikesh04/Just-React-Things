import React ,{useMemo,useState,memo} from "react";

const UseMemoLearn = () => {
 const [val, setVal] = useState(0)
 const [counterTwo, setCounterTwo] = useState(0)

 
 const checkEven = ()=>{
     console.log("checking");
     return val%2===0;
    } // ** so it un nessarly running when we not not working on counter 1 then also.

    
    
    const isEven =useMemo(() => checkEven(), [val]);
 //** to optimise this use Memo comes inside the picture */

//  The React useMemo Hook returns a memoized value.

// Think of memoization as caching a value so that it does not need to be recalculated.

// The useMemo Hook only runs when one of its dependencies update.

// This can improve performance. 



  return (
    <>
      <div>UseMemo</div>
      <button onClick={()=>setVal(val+1)}>Counter1{  val}</button>
      <p>{(isEven?"even":"odd")}</p>
      
      <button onClick={()=>setCounterTwo(counterTwo+1)}>Counter2 {  counterTwo}</button>
      
    </>
  );
};

export default memo(UseMemoLearn);
