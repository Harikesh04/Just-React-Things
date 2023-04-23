import React from 'react'
import useFetch from "./useFetch"

const CustomHook = () => {
    const { data, loading, error } = useFetch("http://localhost:8080/")
  return (
    <>
    <h1>Custom Hook</h1>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    {data && <p>Data: {data}</p>}
    
    </>
   
  )
}

export default CustomHook


// ? Custom Hook is nothing but a function that is used to reduce the code repetition and make our own hooks