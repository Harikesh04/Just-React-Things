import React from 'react'
import { useState } from 'react'
import ChildComponent from './ChildComponent.js'


// ? how to send data from child component to parent component

const Parent = () => {
    const [data, setData] = useState('');

    function handleClick(childData){
        setData(childData);
    }

    
  return (
    <>
    <div>Parent</div>
    <div>Child Data:{data}</div>
    <ChildComponent onParentData={handleClick}/>
    </>
    

  )
}

export default Parent