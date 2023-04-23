import React, { useState,useTransition } from 'react'

const UseTrasitionHook = () => {
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    function handleChange(event) {
        // ? This is a time taking process
        // setInput(event.target.value);
        // const l=[];
        // for (let i=0; i<20000;i++) {
        //     l.push(event.target.value);


        // }
        // setOutput(l);

        setInput(event.target.value);
        const l=[];
        // ! here with the help of useTransition hook we set the priority of output state low and it will update asynchronously and will not slow down our app
        startTransition(() => {
            for (let i=0; i<20000;i++) {
                l.push(event.target.value);
    
    
            }
            setOutput(l);

        })
      
    }
  return (
    <>
     <div>UseTrasitionHook</div>
    
    <input type="text" onChange={handleChange}  />
   { isPending ? "loading..":
    output.map((item)=>{
        return <div>{item}</div>
    })
   }
    </>
   

  )
}

export default UseTrasitionHook