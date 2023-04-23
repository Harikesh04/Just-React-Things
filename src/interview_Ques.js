// Pure Component vs Higher Order Component



//  ** Pure Compnents: it takes props as input and don't have their own logic : eg cards, buttons, testimonials etc

// **  Higher Order Componets : Componets which recieve a component as an arguments and have its own logic which could be
// 1. which component will render
// 2.ui change
// 3.change in component on some need

// ?? with the help of hocs we prevents our application of making multiple components and make our code efficient


// ! Controlled Components vs unControlled Components

// ? Controlled component and unControlled components refers to different ways of managing form emlments such as input tags, checkboxes

// Controlled                          ||   unControlled components
  // 1. uses state for storing  data         1.value is maneged by dom itself the value of the form element is read from the DOM when the form is submitted.
  //                                         2.uses useRef hook for implementation



import React from 'react'

 export const Controlled = () => {
  const [inputValue, setInputValue] = React.useState('')
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  
  return (
    <>
     <div>Controlled Component</div>
    <input type="text"  value={inputValue} onChange={handleChange}/>
    </>
   
  )
}


import React from 'react'

export const unControlled = () => {
 
  const inputRef = React.useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value;
    console.log("Form submitted with value:", value);
  }
  return (
    <>
    <div>unControlled</div>
    <form  onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <input type="submit" />

    </form>
    
    </>
    
  )
}





