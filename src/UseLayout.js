import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";

const UseLayout = () => {
  const [val, setVal] = useState(false);
  const popup = useRef();
  const button = useRef();

  //  ! useEffect and useLayoutEffect are almost same but the main difference is
  // ? useEffect => async ,useLayoutEffect=synchronous

//  * useLayoutEffect is most prefered when we have to do dom manipulation it will make the things faster else useEffect is good


  useLayoutEffect(() => {
    if (popup.current == null) {
      return;
    }
    const {bottom}=button.current.getBoundingClientRect();
    console.log( );
    popup.current.style.top=`${bottom+25}px`
  }, []);

  return (
    <Fragment>
      <button  ref={button} onClick={() => setVal(!val)}>Submit</button>
      {val && <div ref={popup}>"this is a popup"</div>}
    </Fragment>
  );
};

export default UseLayout;
