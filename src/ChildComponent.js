import React from 'react'

const ChildComponent = (props) => {
    function handleClick() {
        
       props.onParentData("data from child component");
    }
  return (
    <>
     <div>ChildComponent</div>
     <button onClick={handleClick}>Click me </button>
    </>
   
  )
}

export default ChildComponent