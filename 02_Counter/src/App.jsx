import { useState } from "react";
import "./App.css";
function App() {

  const [counter,setCounter] = useState(2)
  // let counter = 0;

  let addvalue = () => {
    console.log("onclick", counter);
    // counter = counter + 1;
    if(counter < 20){
      setCounter(counter +1)

    }
  };

  let removeValue = () => {
    console.log("onclick",counter)
    // counter -= 1; 
    if(counter > 0){
          setCounter(counter -1)
    }
    
    
  };
  return (
    <>
      <h1>Chai Aur React </h1>
      <h2> counter : {counter}</h2>

      <button onClick={addvalue}>Add Value  {counter} + 1 </button>
      <button onClick={removeValue}> Remove Value  {counter} - 1 </button>
    </>
  );
}

export default App;
