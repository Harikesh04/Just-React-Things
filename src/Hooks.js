import React, { useContext, useState ,useEffect,useRef } from "react";
import { Context } from "./index.js";



const Home = () => {

//     //**use state 
    const [num, setNum] = useState(0);// will store initial value.

    //and when ever we have to update the state we uses

   //setState 
    // jaise hi state update hogi component rerender hoga

//     //** use Effect */

    useEffect(() => {
      
        console.log(`showing effect when component  will mount(mtlb jaise hi page load hoga) `)
    
      return () => {
        //** this will run when component will unmount (yani page jb switch krenge ya remove)  */
       
      }
    }, [])//dependency array when ever var inside it change than it will run 
    // empty array means will run 1 time


//     //** use Context  */

    // with the help of use Context hook we can prevent props drilling from parent to child .

    // for that we have to wrap our application with a provider in index.js and there we will pass props or data and we can
    // access any where in any compononet using useContext hook
    
    const data = useContext(Context);// here we have to pass our context
   console.log(data);


   // ** use Ref 

   const customElement = useRef(null);

   console.log(customElement)// will show null

//    ** therefore we will use this in useEffect

useEffect(() => {
  
    console.log(customElement);
    console.log(customElement.current);// in this way we can access the ele and can do DOM manipulation

}, [])


   
  return (
    <>
      <div>React Hooks</div>

      <p>
        1. Use state - it acts as a variable which will store the state of any
        information which we want to show in output when change Basically, when
        we use useState hook then it will rerender the component and output will
        be changed in the screen which don't happens in normal variable .
        **normal var don't rerender the components{" "}
      </p>

      <h1 ref={customElement}>{data}</h1>


    </>
  );
};

export default Home;
