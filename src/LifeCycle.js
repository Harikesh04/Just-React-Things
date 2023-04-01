import React,{useEffect,memo} from 'react'

const LifeCycle = () => {
    // useEffect(() => {
    //     Componet did mount

    //     return(
    //         this will run when component will unmount
    //     )
      
       
    //   }, [])
    console.log("...");
  return (
    <>
    
    <div>LifeCycle</div>
    
    
    </>
    

    //Component will Mount // is depreceated now
    //Component did mount // jb component render hoga tb we use hoga
     //should component update // from this we decide wether component should rerender or not .

     //** when component we not rerender then update will not we visible in screen */
    //component did update
    //component will unmount // jb component unmount ho tb run hota h
  )
}

export default memo(LifeCycle);
//after using this this child component will render only when there is change in val in its state not parent state.
//** will increase performace */