import React, { useMemo, useState, memo } from "react";



const UseMemoLearn = () => {
  const [dark, setDark] = useState(false);
  const [num, setNum] = useState(0);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  function slowFunction(num) {
    for (let i = 0; i < 1000000000; i++) {}

    return num * 2;
  }

  // const doubleNumber=  slowFunction(num); // ? when ever any state changes component will rerender and will unneccesarily call this slow function and our application will slow down therefore we will use use memo

  // ! use Memo return a memoized value and take a parameter will run the func only when the val in dependency arr will change

  // * why don't we always use useMemo ?

  // ? if we will always wrap every state in useMemo it will take unnecassery space and will be problematic for our application

  const doubleNumber = useMemo(() => {
    return slowFunction(num);
  }, [num]);

  return (
    <>
      <input
        type="number"
        onChange={(e) => setNum(parseInt(e.target.value))}
        placeholder={num}
      />

      <button onClick={() => setDark(!dark)}>Change Theme</button>

      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
};

export default UseMemoLearn;
