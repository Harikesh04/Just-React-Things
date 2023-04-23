import React from 'react'

const RenderProps = () => {
  
  return (
    <div>RenderProps</div>
  )
}


export default RenderProps


//custom hooks
//virtual dom vs real dom

// ? Real DOM => REAL DOM IS just html tags with some additional javascript functinality thats added into it.
// ? Virtual DOM => So preveisouly what happens when ever a user clicks on a button or suppose any state changes then the dom directly gots changed which was a slow process . 

// ? Inside react js   virtual DOM is a lightweight representation of the actual DOM that React uses to keep track of changes and efficiently update the UI..

// ! Vue.js also uses virtual dom

// ! suppose in button click 4 state has to be change how will react process on this?


// ? there is a update in batch,  react will update all the state in just one render.

// !reconciliation algorithm

// ? In React.js, the reconciliation algorithm is a process that compares two different versions of the virtual DOM and applies the necessary updates to efficiently update the actual DOM. This algorithm is responsible for determining the minimal set of changes required to update the UI while minimizing the number of DOM manipulations.

// ? When a change occurs in the application, React creates a new version of the virtual DOM, compares it with the previous version, and calculates the difference. Then, it applies the necessary updates to the actual DOM to reflect the changes.

// !how react handles async updates

//  ? React handles async updates through a mechanism called the "event loop" and a set of internal APIs designed to manage state updates and re-renders in a non-blocking way.

// ? When an asynchronous event, such as a user click or a network request, triggers a state change in a React component, React schedules the update using its internal event queue. This queue is managed by the React "event loop," which executes a set of tasks in a non-blocking way, allowing the browser to continue processing other events.

// ? React then performs a process called "reconciliation," which determines which parts of the UI need to be updated based on the changes in state. React updates the virtual DOM and schedules a re-render of the affected components.

// ? During the re-render process, React uses a diffing algorithm to compare the new virtual DOM with the old one and determine the minimal set of changes required to update the actual DOM. This algorithm allows React to optimize the rendering process and avoid unnecessary DOM manipulations.
// !Optimizations in react and best practices you use for react js

// 1.code splitting=> moudularizing your component , load components by component
//  2. using useEffect hooks efficiently 
// 3. using useMemo and useCallback hooks
// 4. using functional based components
// 5. using HOC
// 6. prevent code redundancy


// ! what is difference between react 17 vs 18
// *1. Automatic Batching: concept of batching was introduced in React v 18 in which multiple state of react will update in single rerender , in previous version it takes n no. of rerender to update n state of react.

// * 2.useTransition Hook => with the help of useTransition hook we can point out low priority state{ disadvantage: it increases unnecessary rendering in application}

// * 3. suspence =>  while server side rendering when data is not loaded in client side then a default loader/data can be shown with the help of suspence which inhances user experience.

// what is transition and what is difference between transition and debouncing and setTimeout


// ! differecen between reactjs and angular

// React => easy to learn , have freedom , follow virtual dom , one way data binding , fast
// Angular => a full fleged framework , complex, two way data binding , follow real dom manipulation , slow









