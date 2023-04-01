import React,{useState} from 'react'
import LifeCycle from "./LifeCycle"

const UseCallbackLearn = () => {
    const [val, setVal] = useState(0)
  return (
    <>
    <div>UseCallback</div>

    // both use Memo and use Callback are used for improving peformance of react application

    //so what happen in react components when ever any state changes then components rerenders which leds to run some functions un nessarily .

    //so with the help of useCallback and useMemo we limit them that you will run only when there is a change in the dependency array. which led to inc in performace.

    // ** The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
    <LifeCycle/>


    <button onClick={()=>setVal(val+1)}>Counter1{  val}</button>
    </>
  )
}

export default UseCallbackLearn